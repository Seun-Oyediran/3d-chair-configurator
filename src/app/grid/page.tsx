"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Group, Object3DEventMap, Vector3 } from "three";
import { Html, Image, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { clamp } from "@/utils";
import { imagesData } from "@/utils/static";
import { easing } from "maath";
import { RenderIf } from "@/components/shared";

interface IDimensions {
  GRID_GAP: number;
  TILE_SIZE: number;
  TILE_SPACE: number;
  GRID_SIZE: number;
  TOTAL_GRID_SIZE: number;
}

// const GRID_GAP = 0.01;
// const TILE_SIZE = 2.5;
// const TILE_SPACE = TILE_SIZE + GRID_GAP;
const IMAGE_RES = 512;

// const GRID_SIZE = TILE_SPACE * 3;
// const TOTAL_GRID_SIZE = GRID_SIZE * 3;

const TILES = (TILE_SPACE: number) => [
  {
    pos: [-TILE_SPACE, TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=1`,
  },
  {
    pos: [0, TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=2`,
  },
  {
    pos: [TILE_SPACE, TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=3`,
  },
  {
    pos: [-TILE_SPACE, 0, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=4`,
  },
  {
    pos: [0, 0, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=5`,
  },
  {
    pos: [TILE_SPACE, 0, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=6`,
  },
  {
    pos: [-TILE_SPACE, -TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=7`,
  },
  {
    pos: [0, -TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=8`,
  },
  {
    pos: [TILE_SPACE, -TILE_SPACE, 0],
    image: `https://picsum.photos/${IMAGE_RES}?random=9`,
  },
];

const TILE_GROUPS = (GRID_SIZE: number) => [
  {
    pos: [GRID_SIZE * -1, GRID_SIZE * 1, 0],
  },
  {
    pos: [0, GRID_SIZE, 0],
  },
  {
    pos: [GRID_SIZE, GRID_SIZE, 0],
  },
  {
    pos: [GRID_SIZE * -1, 0, 0],
  },
  {
    pos: [0, 0, 0],
  },
  {
    pos: [GRID_SIZE, 0, 0],
  },
  {
    pos: [GRID_SIZE * -1, GRID_SIZE * -1, 0],
  },
  {
    pos: [0, GRID_SIZE * -1, 0],
  },
  {
    pos: [GRID_SIZE, GRID_SIZE * -1, 0],
  },
];

interface ITiles extends IDimensions {
  groupIndex: number;
  newPosition?: { x: number; y: number; z: number };
}

interface ISingleTile {
  item: {
    pos: number[];
    image: string;
  };
  TILE_SIZE: number;
  data: any;
  offsetY: number;
}

function SingleTile(props: ISingleTile) {
  const { item, TILE_SIZE, data, offsetY } = props;

  const ref = useRef<any>();
  const bgRef = useRef<any>();
  const textRef = useRef<any>();
  const yearTextRef = useRef<any>();

  const [hovered, setHovered] = useState(false);
  const pointerOver = (e: any) => {
    e.stopPropagation(), setHovered(true);
  };
  const pointerOut = () => {
    setHovered(false);
  };

  useFrame((_, delta) => {
    easing.damp(ref.current.material, "zoom", hovered ? 1.3 : 1, 0.2, delta);
    easing.damp(
      bgRef.current.material,
      "opacity",
      hovered ? 0.4 : 0,
      0.2,
      delta
    );

    // easing.damp(textRef.current, "fillOpacity", hovered ? 1 : 0, 0.2, delta);
    // easing.damp(
    //   yearTextRef.current,
    //   "fillOpacity",
    //   hovered ? 1 : 0,
    //   0.2,
    //   delta
    // );
  });

  const textPositionX = -TILE_SIZE / 2 + 0.05 * TILE_SIZE;
  const textPositionY = -TILE_SIZE / 2 + 0.1 * TILE_SIZE;

  return (
    <Fragment>
      <group position={[item?.pos[0], item?.pos[1] + offsetY, item?.pos[2]]}>
        <mesh>
          <RenderIf condition={false}>
            <Text
              ref={yearTextRef}
              font="/fonts/circular-black/circular-black.ttf"
              fontSize={0.1}
              position={[textPositionX, textPositionY + 0.15, 0.01]}
              fillOpacity={1}
              anchorX="left"
              fontWeight="400"
            >
              {data?.year}
            </Text>
            <Text
              ref={textRef}
              font="/fonts/circular-black/circular-black.ttf"
              fontSize={0.1}
              position={[textPositionX, textPositionY, 0.01]}
              fillOpacity={1}
              anchorX="left"
            >
              {data?.album}
            </Text>
          </RenderIf>
          <Image
            ref={ref}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            url={data?.cover}
            toneMapped
          >
            <planeGeometry args={[TILE_SIZE, TILE_SIZE]}></planeGeometry>
          </Image>

          <RenderIf condition={false}>
            <Html
              className="app_grid_root"
              position={[-TILE_SIZE / 2 + 0.15, -TILE_SIZE / 2 + 0.4, 0]}
            >
              <div
                className="app_grid_details"
                onClick={() => {
                  console.log(123);
                }}
              >
                <p className="app_grid_details__year">{data?.year}</p>
                <h3
                  className="app_grid_details__name"
                  style={{
                    color: "white", // Text color
                    textShadow: `
                  -1px -1px 0 #000,
                  1px -1px 0 #000,
                  -1px 1px 0 #000,
                  1px 1px 0 #000
                `, // Outline effect
                  }}
                >
                  {data?.album}
                </h3>
              </div>
            </Html>
          </RenderIf>
        </mesh>

        <mesh ref={bgRef}>
          <planeGeometry args={[TILE_SIZE, TILE_SIZE]}></planeGeometry>
          <meshBasicMaterial transparent color="#000"></meshBasicMaterial>
        </mesh>
      </group>
    </Fragment>
  );
}

function Tiles(props: ITiles) {
  const { groupIndex, TILE_SIZE, TILE_SPACE } = props;

  return (
    <Fragment>
      {TILES(TILE_SPACE)?.map((item, index) => {
        const generalIndex = groupIndex * 9 + index;

        const dataIndex = generalIndex % imagesData.length;

        const data = imagesData[dataIndex];
        const indexModulus = index % 3;

        let offsetY = 0;

        if (indexModulus === 0) {
          offsetY = TILE_SPACE / 2.5;
        }

        if (indexModulus === 2) {
          offsetY = -TILE_SPACE / 3.5;
        }

        return (
          <SingleTile
            key={index}
            TILE_SIZE={TILE_SIZE}
            data={data}
            item={item}
            offsetY={offsetY}
          />
        );
      })}
    </Fragment>
  );
}

interface ITilesGroup extends IDimensions {
  handleTileClick: (vector3: Vector3) => void;
  pos: number[];
  groupIndex: number;
}

function TIleGroup(props: ITilesGroup) {
  const {
    handleTileClick,
    pos,
    groupIndex,
    GRID_GAP,
    GRID_SIZE,
    TILE_SIZE,
    TILE_SPACE,
    TOTAL_GRID_SIZE,
  } = props;

  const tileGroupRef = useRef<Group<Object3DEventMap> | null>(null);
  const tilePosition = useRef(new Vector3(pos[0], pos[1], pos[2]))?.current;

  const gridSize = new Vector3(TOTAL_GRID_SIZE * 1, TOTAL_GRID_SIZE * 1, 0);

  useFrame(() => {
    if (!tileGroupRef?.current) return;

    const worldPosition = new Vector3();
    tileGroupRef.current.getWorldPosition(worldPosition);

    // Check if the tile is off the screen
    if (worldPosition.x < -gridSize.x / 2) {
      tilePosition.x += gridSize.x;
    } else if (worldPosition.x > gridSize.x / 2) {
      tilePosition.x -= gridSize.x;
    }

    if (worldPosition.y < -gridSize.y / 2) {
      tilePosition.y += gridSize.y;
    } else if (worldPosition.y > gridSize.y / 2) {
      tilePosition.y -= gridSize.y;
    }

    // Update the tile group's position
    tileGroupRef.current.position.copy(tilePosition);
  });

  return (
    <Fragment>
      <group
        ref={tileGroupRef}
        position={[pos[0], pos[1], pos[2]]}
        onClick={(e) => {
          const worldPosition = new Vector3();
          e.object.getWorldPosition(worldPosition);
          // console.log(worldPosition);

          handleTileClick(worldPosition);
        }}
      >
        <Tiles
          groupIndex={groupIndex}
          GRID_GAP={GRID_GAP}
          GRID_SIZE={GRID_SIZE}
          TILE_SIZE={TILE_SIZE}
          TILE_SPACE={TILE_SPACE}
          TOTAL_GRID_SIZE={TOTAL_GRID_SIZE}
        />
      </group>
    </Fragment>
  );
}

interface IExperience {
  deltaY: number;
  deltaX: number;
}

function Experience(props: IExperience) {
  const { deltaX, deltaY } = props;
  const basePosition = useRef([0, 0]);
  const { viewport } = useThree();

  const GRID_GAP = 0.005;
  const TILE_SIZE = clamp(0.8, 2.5, 0.25 * viewport.width + 0.8);
  const TILE_SPACE = TILE_SIZE + GRID_GAP;
  const GRID_SIZE = TILE_SPACE * 3;
  const TOTAL_GRID_SIZE = GRID_SIZE * 3;

  const groupRef = useRef<Group<Object3DEventMap> | null>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    easing.damp3(
      groupRef?.current?.position,
      [basePosition?.current[0], basePosition?.current[1], 0],
      0.25,
      delta
    );
  });

  useEffect(() => {
    basePosition.current = [
      basePosition.current[0],
      basePosition.current[1] + deltaY * 0.005,
    ];
  }, [deltaY]);

  useEffect(() => {
    basePosition.current = [
      basePosition.current[0] + deltaX * 0.005,
      basePosition.current[1],
    ];
  }, [deltaX]);

  return (
    <Fragment>
      {/* <OrbitControls /> */}
      <group ref={groupRef} key={TILE_SIZE}>
        {TILE_GROUPS(GRID_SIZE)?.map((item, index) => {
          return (
            <TIleGroup
              key={index}
              groupIndex={index}
              pos={item?.pos}
              handleTileClick={(vec) => {
                if (!groupRef.current) return;
                const newX = groupRef?.current.position.x - vec.x;
                const newY = groupRef?.current.position.y - vec.y;

                basePosition.current = [newX, newY];
              }}
              GRID_GAP={GRID_GAP}
              GRID_SIZE={GRID_SIZE}
              TILE_SIZE={TILE_SIZE}
              TILE_SPACE={TILE_SPACE}
              TOTAL_GRID_SIZE={TOTAL_GRID_SIZE}
            />
          );
        })}
      </group>

      <EffectComposer>
        <Noise opacity={0.1} />
      </EffectComposer>
    </Fragment>
  );
}

export default function Page() {
  const [delta, setDelta] = useState({ x: 0, y: 0 });

  // console.log(delta);

  const isDown = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const velocity = useRef({ x: 0, y: 0 });
  const touchStartTime = useRef(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setDelta({ x: -e?.deltaX, y: e?.deltaY });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDown.current = true;
    // this.scroll.position = {
    // 	x: this.scroll.current.x,
    // 	y: this.scroll.current.y
    // }
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    const distanceX = (touchStartX.current - x) * 2.5;
    const distanceY = (touchStartY.current - y) * 2;

    setDelta({ x: -distanceX, y: distanceY });

    touchStartX.current = x;
    touchStartY.current = y;
  };

  const handleTouchEnd = () => {
    isDown.current = false;

    // Apply inertia
    const applyInertia = () => {
      if (
        !isDown.current &&
        (Math.abs(velocity.current.x) > 0.1 ||
          Math.abs(velocity.current.y) > 0.1)
      ) {
        setDelta((prevDelta) => ({
          x: prevDelta.x + velocity.current.x,
          y: prevDelta.y + velocity.current.y,
        }));

        // Decelerate velocity
        velocity.current = {
          x: velocity.current.x * 1, // Inertia factor
          y: velocity.current.y * 1,
        };

        requestAnimationFrame(applyInertia);
      }
    };

    requestAnimationFrame(applyInertia);
  };

  useEffect(() => {
    document.addEventListener(
      "wheel",
      function (event) {
        if (event.deltaX !== 0) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
    return () => {
      document.removeEventListener("wheel", function (event) {
        if (event.deltaX !== 0) {
          event.preventDefault();
        }
      });
    };
  }, []);

  return (
    <div
      className="app_grid_canvas"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Canvas
        shadows
        id="c"
        className="canvas"
        camera={{ position: [0, 0, 2.5 * 1] }}
      >
        {/* <color attach="background" args={["#ededed"]} />
    <fog attach="fog" args={["#ededed", 1, 300]} /> */}
        <Experience deltaY={delta?.y} deltaX={delta?.x} />
        <ambientLight color={0x404040} intensity={10} />
      </Canvas>
    </div>
  );
}
