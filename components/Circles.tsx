import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
};

function Star({ mousePosition }: { mousePosition: { x: number; y: number } }) {
    const group = useRef<THREE.Group>(null);
    const [stars, setStars] = useState<{ x: number; y: number; z: number }[]>([]);

    useEffect(() => {
        const starData = Array.from({ length: 500 }).map(() => ({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 2000,
            z: Math.random() * -2000,
        }));
        setStars(starData);
    }, []);

    useFrame(() => {
        if (group.current) {
            group.current.children.forEach((star) => {
                const directionFactor = 0.01; // Subtle effect of mouse movement
                const mesh = star as THREE.Mesh;
                mesh.position.x += mousePosition.x * directionFactor;
                mesh.position.y += mousePosition.y * directionFactor;

                // Move stars closer to the viewer
                mesh.position.z += 0.5;
                if (mesh.position.z > 0) {
                    mesh.position.z = -2000; // Reset to the back
                }
            });
        }
    });

    return (
        <group ref={group}>
            {stars.map((star, i) => (
                <mesh key={i} position={[star.x, star.y, star.z]}>
                    <sphereGeometry args={[0.5, 8, 8]} />
                    <meshStandardMaterial
                        color="gold"
                        emissive="gold"
                        emissiveIntensity={1.5}
                        opacity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}

function Circles({ pageInfo }: Props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY, currentTarget } = event;
        const { offsetWidth, offsetHeight } = currentTarget;
        const x = (clientX / offsetWidth) * 2 - 1;
        const y = (clientY / offsetHeight) * 2 - 1;
        setMousePosition({ x, y });
    };

    return (
        <div className="relative flex justify-center w-full h-screen">
            <div
                onMouseMove={handleMouseMove}
                className="absolute w-full h-full"
            >
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.2} />
                    <Star mousePosition={mousePosition} />
                    <EffectComposer>
                        <Bloom intensity={1.5} luminanceThreshold={0} luminanceSmoothing={0.9} />
                    </EffectComposer>
                </Canvas>
            </div>
            <div className="absolute h-[150px] w-[150px] object-cover top-[15rem] z-[10]">
                <img src={urlFor(pageInfo?.heroImage).url()} alt="Hero" />
            </div>
        </div>
    );
}

export default Circles;
