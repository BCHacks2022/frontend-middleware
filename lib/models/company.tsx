export class company {
  image: String;
  name: String;
  link: String;
  elId: String;
  score: String;
  policyText: String | null;

  constructor(
    image: String,
    name: String,
    link: String,
    elId: String,
    score: String,
    policyText: String | null
  ) {
    this.image = image;
    this.name = name;
    this.link = link;
    this.elId = elId;
    this.score = score;
    this.policyText = policyText;
  }
}
