"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const person = "/models/model2.glb";
const personAnim2 = "/models/model2anim.glb";
const personAnim4 = "/models/backflip.glb";

const animationUrls = {
  wait: personAnim2,
  backflip: personAnim4,
};

const Person = memo(function Person({
  animation = "rest",
  compact = false,
  interactive = true,
}) {
  const personRef = useRef(null);
  const headRef = useRef(null);
  const [ready, setReady] = useState(false);
  const target = useMemo(() => new THREE.Vector3(), []);

  const { scene, animations: restAnimations } = useGLTF(person);
  const selectedUrl = animationUrls[animation] ?? person;
  const { animations: selectedAnimations } = useGLTF(selectedUrl);

  const restClip = restAnimations[0];
  restClip.name = "rest";

  const selectedClip = selectedAnimations[0];
  if (selectedClip) selectedClip.name = animation;

  const { actions } = useAnimations(
    selectedClip && animation !== "rest" ? [restClip, selectedClip] : [restClip],
    personRef,
  );

  useEffect(() => {
    headRef.current = scene.getObjectByName("Head");
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        child.frustumCulled = true;
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ready || !headRef.current || !interactive) return;

    if (animation === "rest") {
      target.set(state.pointer.x * 2.1, state.pointer.y * 1.55, 2.4);
      headRef.current.lookAt(target);
    }

    if (animation === "backflip") {
      headRef.current.lookAt(state.camera.position);
    }
  });

  useEffect(() => {
    const restAction = actions.rest;
    restAction?.reset().fadeIn(0.3).play();
    if (restAction) restAction.loop = THREE.LoopRepeat;
    setReady(true);

    return () => {
      restAction?.fadeOut(0.2);
    };
  }, [actions]);

  useEffect(() => {
    if (!ready || animation === "rest" || !actions[animation]) return undefined;

    actions.rest?.fadeOut(0.18);
    const action = actions[animation];
    action.reset().fadeIn(0.25).play();
    action.loop = THREE.LoopRepeat;
    action.paused = false;
    action.enabled = true;

    return () => {
      action.fadeOut(0.25);
      actions.rest?.reset().fadeIn(0.2).play();
    };
  }, [actions, animation, ready]);

  return (
    <group ref={personRef}>
      <primitive
        object={scene}
        scale={compact ? 1.28 : 1.58}
        position={compact ? [0, -1, 0] : [0, -1.4, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
});

useGLTF.preload(person);

export default Person;
