import { v } from "@dojo/framework/widget-core/d";
import { WidgetBase } from "@dojo/framework/widget-core/WidgetBase";

export default class HelloWorld extends WidgetBase {
  protected render() {
    return v("h1", { title: "I am a title" }, ["Bizz-E-Bodies"]);
  }
}
