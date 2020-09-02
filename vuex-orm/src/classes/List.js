import { Model } from "@vuex-orm/core";
import User from "./User";

export default class List extends Model {
  static entity = "lists";

  static fields() {
    return {
      id: this.uid(null),
      title: this.attr(""),
      user_id: this.attr(null),

      //relatioships
      //   a use rhas many lists
      user: this.belongsTo(User, "user_id")
    };
  }
}
