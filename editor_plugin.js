(function() {
    tinymce.create('tinymce.plugins.EmbedPlugin', {
        init: function (ed, url) {
            ed.addCommand('mceExample', function () {
                ed.windowManager.open({
                    file: url + '/dialog4.htm',
                    width: 425 + 'px',
                    height: 205 + 'px',
                    inline: 1
                }, {
                    plugin_url: url,
                    some_custom_arg: 'custom arg'
                });
            });
            ed.addButton('embed', {
                title: 'Embed code',
                cmd: 'mceExample',
                image: url + '/u.png'
            });
            ed.onNodeChange.add(function (ed, cm, n) {
                cm.setActive('example', n.nodeName == 'IMG');
            });
        },
        createControl: function (n, cm) {
            return null;
        },
        getInfo: function () {
            return {
                longname: 'Udemy Embed Plugin',
                author: 'Udemy',
                authorurl: 'http://www.udemy.com',
                infourl: 'http://www.udemy.com',
                version: "1.0"
            };
        }
    });
    tinymce.PluginManager.add('embed', tinymce.plugins.EmbedPlugin);
})();