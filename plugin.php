<?php
/**
 * Plugin Name: Tangible: Design
 * Description: Design module shared by Tangible plugins
 * Version: 2024.09.18
 * GitHub Plugin URI: https://github.com/tangibleinc/design
 */
use tangible\design;

require_once __DIR__ . '/index.php';

add_action('plugins_loaded', function() {
  design\is_plugin(true);
}, 1); // After latest module version loaded
