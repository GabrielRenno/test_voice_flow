<script type="text/javascript">
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        try {
            window.voiceflow.chat.load({
                verify: { projectID: '66c4f464161e5cd01f3badce' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                render: {
                    mode: 'embedded',
                    target: document.body, // Replace with a specific element if needed
                },
                autostart: false,
            });
        } catch (error) {
            console.error('Voiceflow chat widget failed to load:', error);
        }
    };
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    s.parentNode.insertBefore(v, s);
})(document, 'script');
</script>

