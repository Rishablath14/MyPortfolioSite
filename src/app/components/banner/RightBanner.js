"use client"
import React from 'react'
import { bannerImg } from "../../assets/index";
import Image from 'next/image';
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import person from "@/app/assets/model2.glb";
import personAnim from "@/app/assets/modelanim.glb";
import personAnim2 from "@/app/assets/model2anim.glb";
import personAnim1 from "@/app/assets/model1anim.glb";
import * as THREE from "three";


const Person = () => {
  const personRef = useRef(null);
  const media = window.matchMedia("(max-width: 390px)");
  
  // Load all animations and the model in parallel to ensure smooth preloading
  const { animations: animIdle } = useGLTF(personAnim); // First animation (idle)
  const { animations: animPerma } = useGLTF(personAnim2); // Second animation (perma)
  const { animations: animDelta } = useGLTF(personAnim1); // Third animation (delta)
  const { animations: animD } = useGLTF(person); // Third animation (delta)
  const { scene } = useGLTF(person); // Static model
  // Rename animations for clarity
  animIdle[0].name = "idle";
  animPerma[0].name = "perma";
  animDelta[0].name = "delta";
  animD[0].name = "casual";
  const { actions } = useAnimations([animIdle[0], animPerma[0], animDelta[0],animD[0]], personRef);
  let start = false;
  setTimeout(()=>{
   start=true;
   console.log("syart");
  },2500);

  useFrame((state)=>{
    if(personRef.current && start) {
    let target = new THREE.Vector3(state.mouse.x * 3,state.mouse.y * 3,1);
    personRef.current.getObjectByName("Head").lookAt(target);
    }
  })
  
  useEffect(() => {
    let idleAction, permaAction, deltaAction,casualAction;

    // Define all actions
    idleAction = actions["idle"];
    permaAction = actions["perma"];
    deltaAction = actions["delta"];
    casualAction = actions["casual"];

    // Sequence the animations with proper timing
    const startAnimations = async () => {
      if (idleAction) {
        idleAction.reset().fadeIn(0.1).play();
        idleAction.clampWhenFinished = true;
        idleAction.loop = false;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      if (idleAction) idleAction.fadeOut(0.5);
      if (deltaAction) {
        deltaAction.reset().fadeIn(0.5).play();
        deltaAction.clampWhenFinished = true;
        deltaAction.loop = false;
      }

      // Play 'idle' animation for 3 seconds, then switch to 'perma'
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (deltaAction) deltaAction.fadeOut(0.5);
      // if (permaAction) {
      //   permaAction.reset().fadeIn(0.5).play();
      //   permaAction.clampWhenFinished = true;
      //   permaAction.loop = true;
      // }
      if (casualAction) {
        casualAction.reset().fadeIn(0.5).play();
        casualAction.clampWhenFinished = true;
        casualAction.loop = true;
      }
    };
    startAnimations();

    return () => {
      // Cleanup actions on unmount
      idleAction?.fadeOut(0.5);
      deltaAction?.fadeOut(0.5);
      permaAction?.fadeOut(0.5);
    };
  }, [actions]);
   


  return (
    <group ref={personRef}>
      <mesh castShadow receiveShadow scale={media.matches?1.5:2}>
        <primitive object={scene} position={[0.2, -0.7, 0]} castShadow receiveShadow/>
      </mesh>
    </group>
  );
};
useGLTF.preload(person);
useGLTF.preload(personAnim);
useGLTF.preload(personAnim1);
useGLTF.preload(personAnim2);
const RightBanner = () => {
  return (
    <div className="w-full xl:w-1/2 h-screen flex justify-center items-center relative">
      <Canvas>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} enablePan={false} />
        <Suspense fallback={null}>
          <Person />
        </Suspense>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      </Canvas>
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner



