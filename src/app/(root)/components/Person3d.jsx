import person from "@/app/assets/model2.glb";
import personAnim from "@/app/assets/modelanim.glb";
import personAnim2 from "@/app/assets/model2anim.glb";
import personAnim1 from "@/app/assets/model1anim.glb";
import personAnim4 from "@/app/assets/backflip.glb";
import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";

const Person = memo(({ animation }) => {
  const personRef = useRef(null);
  const media = window.matchMedia("(max-width: 480px)");
  const { animations: animIdle } = useGLTF(personAnim);
  const { animations: animPerma } = useGLTF(personAnim2);
  const { animations: animDelta } = useGLTF(personAnim1);
  const { animations: animFlip } = useGLTF(personAnim4);
  const { animations: animD } = useGLTF(person);
  const { scene } = useGLTF(person);

  animIdle[0].name = "idle";
  animPerma[0].name = "wait";
  animDelta[0].name = "delta";
  animD[0].name = "rest";
  animFlip[0].name = "backflip";
  const { actions } = useAnimations(
    [animIdle[0], animPerma[0], animDelta[0], animD[0], animFlip[0]],
    personRef,
  );
  const [start, setStart] = useState(false);

  useFrame((state) => {
    if (personRef.current && start && animation === "rest") {
      let target = new THREE.Vector3(
        state.pointer.x * 3,
        state.pointer.y * 3,
        1,
      );
      personRef.current.getObjectByName("Head").lookAt(target);
    }
    if (personRef.current && start && animation === "backflip") {
      personRef.current.getObjectByName("Head").lookAt(state.camera.position);
    }
  });

  useEffect(() => {
    let idleAction,
      permaAction,
      deltaAction,
      casualAction,
      walkAction,
      flipAction;

    // Define all actions
    idleAction = actions["idle"];
    permaAction = actions["wait"];
    deltaAction = actions["delta"];
    casualAction = actions["rest"];
    flipAction = actions["backflip"];

    // Sequence the animations with proper timing
    const time = setTimeout(() => {
      setStart(true);
    }, 2500);
    const startAnimations = async () => {
      if (idleAction) {
        idleAction.reset().fadeIn(0.3).play();
        idleAction.clampWhenFinished = true;
        idleAction.loop = false;
      }

      await new Promise((resolve) => setTimeout(resolve, 1200));
      if (idleAction) idleAction.fadeOut(0.3);
      if (deltaAction) {
        deltaAction.reset().fadeIn(0.3).play();
        deltaAction.clampWhenFinished = true;
        deltaAction.loop = false;
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (deltaAction) deltaAction.fadeOut(0.3);
      if (casualAction) {
        casualAction.reset().fadeIn(0.3).play();
        casualAction.clampWhenFinished = true;
        casualAction.loop = true;
      }
    };
    startAnimations();

    return () => {
      // Cleanup actions on unmount
      clearTimeout(time);
      idleAction?.fadeOut(0.3);
      deltaAction?.fadeOut(0.3);
      permaAction?.fadeOut(0.3);
      casualAction?.fadeOut(0.3);
    };
  }, []);

  useEffect(() => {
    if (animation && start) {
      actions[animation].reset().fadeIn(0.3).play();
      actions[animation].clampWhenFinished = true;
      actions[animation].loop = true;
    }

    return () => {
      actions[animation].fadeOut(0.3);
    };
  }, [animation]);

  return (
    <group ref={personRef}>
      <mesh castShadow receiveShadow scale={media.matches ? 2.2 : 2.8}>
        <primitive
          object={scene}
          position={media.matches ? [0, -1, 0] : [0, -0.9, 0]}
          castShadow
          receiveShadow
        />
      </mesh>
    </group>
  );
});
useGLTF.preload(person);
useGLTF.preload(personAnim);
useGLTF.preload(personAnim1);
useGLTF.preload(personAnim2);
useGLTF.preload(personAnim4);

export default Person;
