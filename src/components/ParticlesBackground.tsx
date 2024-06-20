import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "../particles-config";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
    const [particlesInit, setParticlesInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesInit(true);
        });
    }, []);

    return particlesInit && <Particles options={particlesConfig} />
}

export default ParticlesBackground;
