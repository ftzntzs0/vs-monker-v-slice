#pragma header

#define round(a) floor(a + 0.5)
#define texture flixel_texture2D
#define iResolution openfl_TextureSize
#define iChannel0 bitmap

const float blurSize = 1.0/200.0;
uniform float intensity; // 0.5;
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec4 sum = vec4(0);
    vec2 uv = fragCoord.xy/iResolution.xy;
	round(0.5);
        
    //thank you! http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/ for the 
     //blur tutorial
    // blur in y (vertical)
    // take nine samples, with the distance blurSize between them
    sum += texture(iChannel0, vec2(uv.x - 4.0*blurSize, uv.y)) * 0.05;
    sum += texture(iChannel0, vec2(uv.x - 3.0*blurSize, uv.y)) * 0.09;
    sum += texture(iChannel0, vec2(uv.x - 2.0*blurSize, uv.y)) * 0.12;
                
    sum += texture(iChannel0, vec2(uv.x, uv.y - 4.0*blurSize)) * 0.05;
    sum += texture(iChannel0, vec2(uv.x, uv.y - 3.0*blurSize)) * 0.09;
    
    fragColor = sum*intensity + texture(iChannel0, uv); 
}

void main() {
    mainImage(gl_FragColor, openfl_TextureCoordv*openfl_TextureSize);
}