import p5 from 'p5';
import { p5asciify } from 'p5.asciify';

const sketch = new p5((p) => {

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
        p.background(0);
        p.rotateX(p.frameCount * 0.02);
        p.rotateY(p.frameCount * 0.02);
        p.normalMaterial();
        p.box(400);
    };

    p.setupAsciify = () => {
        p5asciify.asciifier().renderers().get("brightness").update({
            characters: " .,:;i1tfLCG08@",
            invertMode: false,
        });
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
});

export default sketch;