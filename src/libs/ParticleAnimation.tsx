"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  pastZ: number;
}

const PARTICLE_NUM = 500;
const PARTICLE_BASE_RADIUS = 0.5;
const FL = 500;
const DEFAULT_SPEED = 2;
const BOOST_SPEED = 300;

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  let speed = DEFAULT_SPEED;
  let targetSpeed = DEFAULT_SPEED;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let centerX = canvasWidth * 0.5;
    let centerY = canvasHeight * 0.5;

    const resize = () => {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
      centerX = canvasWidth * 0.5;
      centerY = canvasHeight * 0.5;
      context.fillStyle = "rgb(255, 255, 255)";
    };

    window.addEventListener("resize", resize);
    resize();

    mouseX = centerX;
    mouseY = centerY;

    for (let i = 0; i < PARTICLE_NUM; i++) {
      particles[i] = randomizeParticle({ x: 0, y: 0, z: 0, pastZ: 0 });
      particles[i].z -= 500 * Math.random();
    }

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener("mousedown", () => {
      targetSpeed = BOOST_SPEED;
    });

    document.addEventListener("mouseup", () => {
      targetSpeed = DEFAULT_SPEED;
    });

    const loopIntervalId = setInterval(loop, 1000 / 60);

    return () => {
      clearInterval(loopIntervalId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
    };

    function loop() {
      context.save();
      context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.restore();

      speed += (targetSpeed - speed) * 0.01;

      const halfPi = Math.PI * 0.5;
      const atan2 = Math.atan2;
      const cos = Math.cos;
      const sin = Math.sin;

      context.beginPath();
      for (let i = 0; i < PARTICLE_NUM; i++) {
        const p:
          | Particle
          | undefined
          | null
          | false
          | any
          | never
          | unknown
          | any[]
          | string
          | number
          | bigint
          | boolean
          | symbol
          | {}
          | void
          | undefined
          | null
          | false
          | any
          | never
          | unknown
          | any[]
          | string
          | number
          | bigint
          | boolean
          | symbol
          | {}
          | void = particles[i];

        p.pastZ = p.z;
        p.z -= speed;

        if (p.z <= 0) {
          randomizeParticle(p);
          continue;
        }

        const cx = centerX - (mouseX - centerX) * (1.25 as unknown as number);
        const cy = centerY - (mouseY - centerY) * (1.25 as unknown as number);

        const rx = p.x - (cx as unknown as number);
        const ry = p.y - (cy as unknown as number);

        const f = FL / (p.z as unknown as number);
        const x = cx + rx * f;
        const y = cy + ry * f;
        const r = PARTICLE_BASE_RADIUS * f;

        const pf = FL / (p.pastZ as unknown as number);
        const px = cx + rx * pf;
        const py = cy + ry * pf;
        const pr = PARTICLE_BASE_RADIUS * pf;

        const a = atan2(py - y, px - x);
        const a1 = a + halfPi;
        const a2 = a - halfPi;

        context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * cos(a2), y + r * sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
      }
      context.fill();
    }

    function randomizeParticle(p: Particle): Particle {
      p.x = Math.random() * canvasWidth;
      p.y = Math.random() * canvasHeight;
      p.z = Math.random() * 1500 + 500;
      return p;
    }
  }, []);

  return <canvas ref={canvasRef} id="c" />;
};

export default ParticleAnimation;
