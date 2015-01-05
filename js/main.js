
var tl = new TimelineMax();

tl.from('.logo', .75, {scale:0, ease:Bounce.easeOut}, .5)
  .staggerFrom('.animation', 1, {opacity:0, y:40},0.5)
