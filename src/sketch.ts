import p5 from 'p5';
import { p5asciify, renderers } from 'p5.asciify';

const sketch = new p5((p) => {

    let brightnessRenderer: renderers.renderer2d.feature.P5AsciifyBrightnessRenderer;

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
        brightnessRenderer = p5asciify.asciifier().renderers().get("brightness") as renderers.renderer2d.feature.P5AsciifyBrightnessRenderer;

        brightnessRenderer.update({
            characters: " .,:;i1tfLCG08@",
            invertMode: false,
        });
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
});

export default sketch;