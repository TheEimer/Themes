var fs = require('fs');

let buffer = "";

buffer +="# Themes\n\n"
buffer +="This is a repository for themes designed specifically for Aeriform [Tape](https://aeriform.itch.io/Tape)."
buffer +="These are based on the Hundred Rabbits Themes [Ecosystem](https://github.com/hundredrabbits), and compatible with those applications and tools. These themes are hosted here separately as they include additional definitions specific to Tape, out of the scope of the original Ecosystem.\n\n"
buffer +="Theme files are defined as SVG and easily modifiable.\n\n"
buffer +="To install a theme, simply drag and drop the theme file into Tape.\n\n"
buffer +="Available themes:\n\n"

let files = fs.readdirSync('themes');

for (var i = 0; i < files.length; i++) {
  let name=files[i].split('.')[0]
  buffer += "!["+name+"](themes/"+files[i]+") "
}

buffer +="\n\n"
buffer +="Thanks to those that gave permission or blessing to create and distribute themes.\n\n"
buffer +="Contributions are welcome."

fs.writeFile("README.md", buffer, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Generated.");
});
