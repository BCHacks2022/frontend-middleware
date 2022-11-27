export class company {
  image: String;
  name: String;
  link: String;
  elId: String;
  score: String;

  constructor(
    image: String,
    name: String,
    link: String,
    elId: String,
    score: String
  ) {
    this.image = image;
    this.name = name;
    this.link = link;
    this.elId = elId;
    this.score = score;
  }
}
