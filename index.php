<?php
/*
Plugin Name: Udemy Embed Plugin
Plugin URI: http://www.udemy.com
Description: Adds button to editor making it easy to embed a Udemy course.
Author: Udemy
Version: 1.0
Author URI: twitter.com/jackflips
*/

add_filter('mce_external_plugins', "tinyplugin_register");
add_filter('mce_buttons', 'tinyplugin_add_button', 0);

function tinyplugin_add_button($buttons)
{
    array_push($buttons, "separator", "embed");
    return $buttons;
}

function tinyplugin_register($plugin_array)
{
    $url = trim(get_bloginfo('url'), "/")."/wp-content/plugins/tiny-plugin/editor_plugin.js";

    $plugin_array['embed'] = $url;
    return $plugin_array;
}

