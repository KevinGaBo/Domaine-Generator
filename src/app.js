/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "my", "his", "their"];
  let adj = ["great", "big", "small", "beatifull", "wonderfull"];
  let noun = ["jogger", "racoon", "teacher", "series", "glasses"];
  let domaine = [".com"];
  for (let index = 0; index < pronoun.length; index++) {
    const element = pronoun[index];
    for (let index2 = 0; index2 < adj.length; index2++) {
      const element2 = adj[index2];
      for (let index3 = 0; index3 < noun.length; index3++) {
        const element3 = noun[index3];
        if (
          element3[element3.length - 1] == "s" &&
          element3[element3.length - 2] == "e"
        ) {
          console.log(element + element2 + element3.slice(0, -2) + ".es");
        } else {
          console.log(element + element2 + element3 + ".com");
        }
      }
    }
  }
};
