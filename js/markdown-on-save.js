// Generated by CoffeeScript 1.4.0
(function(){(function(e,t){var n;n=t.markdownOnSaveApp={on:function(){this.checkbox.attr("checked","checked");this.buttonOn.hide();return this.buttonOff.show()},off:function(){this.checkbox.removeAttr("checked");this.buttonOff.hide();return this.buttonOn.show()},start:function(){var t;t=e("#cws-markdown");t.detach().insertBefore("#submitdiv h3 span");this.buttonOn=e("img.markdown-on",t);this.buttonOff=e("img.markdown-off",t);this.checkbox=e("#cws_using_markdown");return this.events()},events:function(){this.buttonOn.click(function(e){e.stopPropagation();return n.on()});this.buttonOff.click(function(e){e.stopPropagation();return n.off()});return this.checkbox.change(function(){return e(this).attr("checked")?n.on():n.off()})}};return e(function(){return n.start()})})(jQuery,window)}).call(this);