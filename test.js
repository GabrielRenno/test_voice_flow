(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
    window.voiceflow.chat.load({
        verify: { projectID: '66c4f464161e5cd01f3badce' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        render: {
            mode: 'embedded',
            target: document.body,
        },
        autostart: false,
    });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');
