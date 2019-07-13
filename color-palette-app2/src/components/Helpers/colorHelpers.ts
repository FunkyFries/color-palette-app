import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette: any) {
  if (starterPalette !== undefined) {
    let newPalette: any = {
      paletteName: starterPalette.paletteName,
      id: starterPalette.id,
      emoji: starterPalette.emoji,
      colors: {}
    };
    for (let level of levels) {
      newPalette.colors[level] = [];
    }
    for (let color of starterPalette.colors) {
      let scale = getScale(color.color, 10).reverse();
      for (let i in scale) {
        newPalette.colors[levels[i]].push({
          name: `${color.name} ${levels[i]}`,
          id: color.name.toLowerCase().replace(/ /g, "-"),
          hex: scale[i],
          rgb: chroma(scale[i]).css(),
          hsl: chroma(scale[i]).css("hsl"),
          rgba: chroma(scale[i]).css("rgba")
        });
      }
    }
    return newPalette;
  } else {
    return starterPalette;
  }
}

function getRange(hexColor: string) {
  return [
    chroma(hexColor)
      .darken()
      .hex(),
    hexColor,
    "#fff"
  ];
}

function getScale(hexColor: string, numberOfColors: number) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };
