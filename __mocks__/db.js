const db = {
  quotes: undefined,
  template: `[
    {
      "quote": "Language is conceived in sin and science is its redemption.",
      "id": "5hblv78skeilnl4l",
      "dateCreated": "Mon, 31 Aug 2020 14:09:58 GMT"
    },
    {
      "quote": "To be is to be the value of a variable.",
      "id": "5hblv79nkeilo8gj",
      "dateCreated": "Mon, 31 Aug 2020 14:10:28 GMT"
    },
    {
      "quote": "Physics investigates the essential nature of the world, and biology describes a local bump. Psychology, human psychology, describes a bump on the bump.",
      "id": "5hblv7aqkeilp586",
      "dateCreated": "Mon, 31 Aug 2020 14:11:10 GMT"
    }
  ]`,
  reset() {
    this.quotes = this.template;
  },
  set(quotes) {
    this.quotes = quotes;
  }
}

export default db;
