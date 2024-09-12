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
import personAnim4 from "@/app/assets/backflip.glb";;
import * as THREE from "three";
import HumanLoader from '../HumanLoader';


const Person = ({animation}) => {
  const personRef = useRef(null);
  const media = window.matchMedia("(max-width: 480px)");
  console.log(animation);
  // Load all animations and the model in parallel to ensure smooth preloading
  const { animations: animIdle } = useGLTF(personAnim); // First animation (idle)
  const { animations: animPerma } = useGLTF(personAnim2); // Second animation (perma)
  const { animations: animDelta } = useGLTF(personAnim1); // Third animation (delta)
  const { animations: animFlip } = useGLTF(personAnim4); // Third animation (delta)
  const { animations: animD } = useGLTF(person); // Third animation (delta)
  const { scene } = useGLTF(person); // Static model
  // Rename animations for clarity
  animIdle[0].name = "idle";
  animPerma[0].name = "wait";
  animDelta[0].name = "delta";
  animD[0].name = "rest";
  animFlip[0].name = "backflip";
  const { actions } = useAnimations([animIdle[0], animPerma[0], animDelta[0],animD[0],animFlip[0]], personRef);
  const [start,setStart] = useState(false);
  
  useFrame((state)=>{
    if(personRef.current && start && animation==="rest") {
    let target = new THREE.Vector3(state.pointer.x * 3,state.pointer.y * 3,1);
    personRef.current.getObjectByName("Head").lookAt(target);
    }
    if(personRef.current && start && animation==="backflip") {
      personRef.current.getObjectByName("Head").lookAt(state.camera.position);
      }
  })
  
  useEffect(() => {
    let idleAction, permaAction, deltaAction,casualAction,walkAction,flipAction;

    // Define all actions
    idleAction = actions["idle"];
    permaAction = actions["wait"];
    deltaAction = actions["delta"];
    casualAction = actions["rest"];
    flipAction = actions["backflip"];
   
    // Sequence the animations with proper timing
    const time = setTimeout(()=>{
      setStart(true);
     },2500);
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
      if (casualAction) {
        casualAction.reset().fadeIn(0.5).play();
        casualAction.clampWhenFinished = true;
        casualAction.loop = true;
      }
    };
    startAnimations();

    return () => {
      // Cleanup actions on unmount
      clearTimeout(time);
      idleAction?.fadeOut(0.5);
      deltaAction?.fadeOut(0.5);
      permaAction?.fadeOut(0.5);
      casualAction?.fadeOut(0.5);
    };
  }, []);

  useEffect(()=>{
    if(animation && start){
      actions[animation].reset().fadeIn(0.3).play();
      actions[animation].clampWhenFinished = true;
      actions[animation].loop = true;
    }

    return ()=>{
      actions[animation].fadeOut(0.3);
    }

  },[animation])
   


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
useGLTF.preload(personAnim4);

const RightBanner = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedAnimation,setSelectedAnimation] = useState("rest");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    // Set initial value based on current width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full xl:w-1/2 h-screen flex justify-center items-center relative">
      <Canvas>
        {isDesktop && <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} enablePan={false}/>}
        <Suspense fallback={<HumanLoader/>}>
          <Person animation={selectedAnimation}/>
        </Suspense>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      </Canvas>
      <div className="absolute top-4 right-2">
        <select className="bg-[#0000003c] w-20 h-12 top-2 left-2 border border-gray-300 text-white p-2" value={selectedAnimation} onChange={(e) => setSelectedAnimation(e.target.value)}>
        <option value="rest">
          Rest
        </option>
        <option value="wait">
          Wait
         </option> 
        <option value="backflip">
          Backflip
        </option>
        </select>
      </div>
    </div>
  );
}

export default RightBanner



