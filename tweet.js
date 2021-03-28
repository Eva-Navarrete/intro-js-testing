class Tweet {
  constructor(sender, content) {
    this.sender = sender;
    this.content = content;
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
    this.likes = 0;
  }
  like() {
    this.likes ++;
  }
  retweet() {
    this.retweets ++;
  }
  reply(reply) {
    this.replies.push(reply);
    this.replyCount ++;
  }

}

module.exports = Tweet;
