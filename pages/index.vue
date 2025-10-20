<template>
    <div class="md:pr-100px pr-0 home">
        <span class="text-xs text-gray-400">
            Quoted from [Website Name]
        </span>

        <div class="line w-full md:w-[50%] flex justify-around flex-col mt-5" id="home">
            <h2 class="text-[1.3rem] xl:text-[2rem] sm:text-[1.4rem] opacity-50 ">
                <span>Decision-makers</span>
                <br>
                <span>in design and architecture</span>
            </h2>
            <div class="cube cursor-pointer">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face left"></div>
                <div class="face right"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
            </div>
            <h3 class="lg:text-[2rem] sm:text-[1.4rem] text-end mt-5 ">
                <span>CREATIVE SPACES FOR</span>
                <br>
                <span>LIFE AND BUSINESS</span>
                <br>
                <span>THAT</span>
                <br class="sm:hidden lg:block">
                <span>CAPTURE YOUR</span>
                <br>
                <span>ESSENCE.</span>
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$size: 50px;
$depth: 100px;

.home {
    margin-right: 110px;
    padding: 50px 0;

    @media (max-width: 912px) {
        margin-right: 0;
    }

}

.cube {
    width: $depth;
    height: $depth;
    margin: 60px 50px;
    perspective: 5000px;
    transform-style: preserve-3d;
    position: relative;
    animation: rotateCube 10s infinite linear;


    .face {
        display: block;
        width: $depth;
        height: $depth;
        background-image: url('/image/shape.webp');
        background-size: cover;
        position: absolute;
        box-sizing: border-box;
        transform-style: preserve-3d;
    }

    .front {
        transform: translateZ($size);
    }

    .back {
        transform: rotateY(180deg) translateZ($size);
    }

    .left {
        transform: rotateY(-90deg) translateZ($size);
    }

    .right {
        transform: rotateY(90deg) translateZ($size);
    }

    .top {
        transform: rotateX(90deg) translateZ($size);
    }

    .bottom {
        transform: rotateX(-90deg) translateZ($size);
    }

    &:hover .face {
        background-image: url('/image/d3.jpg');
        background-size: cover;
    }
}

@keyframes rotateCube {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }

    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

.line {
    position: relative;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);


    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 1000px;
        margin: 20px;
        height: 2px;
        background-color: #000;
        transform: translate(-50%, -50%) rotate(135deg);
        transform-origin: center center;


        @media (max-width: 912px) {
            width: 70%;
        }

        @media (max-width: 400px) {
            background-color: transparent;
        }

        @media (min-width: 1200px) {
            width: 55%;
        }
    }
}
</style>