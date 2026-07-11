#pragma header

uniform float offset;

void main() {
    vec2 scrolled_uv = openfl_TextureCoordv + vec2(offset, offset);
    
    scrolled_uv = fract(scrolled_uv);
    gl_FragColor = flixel_texture2D(bitmap, scrolled_uv);
}