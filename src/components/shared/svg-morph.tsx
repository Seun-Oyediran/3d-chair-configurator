import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { useFlubber } from "@/hooks/use-flubber";

interface IProps {
  paths: string[];
}

export function SvgMorph(props: IProps) {
  const { paths } = props;
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 10,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return <motion.path d={path} fill="black" />;
}
