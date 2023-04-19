const easeAnimate = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeIn",
            duration: 0.4,
        }
    }
}

const fadeInUp = {
    start: {
        opacity: 0,
        y: "100px",
    },
    end: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0
    }
}

const imageZoomHover = {
    start: {
        transform: "scale(1)"
    },
    end: {
        transform: "scale(1.1)",
        transition: {
            duration: 0.3
        }
    }
}

export { easeAnimate, fadeInUp, imageZoomHover }