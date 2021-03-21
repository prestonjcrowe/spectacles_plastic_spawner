// -----JS CODE-----
// @input SceneObject objectWithTweens
// @input Component.Text text

//var tweenValue = global.tweenManager.getGenericTweenValue(script.objectWithTweens, "YearCounter");
//print(tweenValue.toString());
var tweenValue;

script.createEvent("UpdateEvent").bind(onUpdate);


function onUpdate(eventData) {
    tweenValue = global.tweenManager.getGenericTweenValue(script.objectWithTweens, "YearCounter");
    print("Updating tweenvalue to " + tweenValue.toString());
    script.text.text = tweenValue.toString();
}
