!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(3),r=n(12);e.exports=n(4)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(10),r=n(28),o=n(16),a=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(48),r=n(15);e.exports=function(e){return i(r(e))}},function(e,t,n){var i=n(20)("wks"),r=n(13),o=n(0).Symbol,a="function"==typeof o;(e.exports=function(e){return i[e]||(i[e]=a&&o[e]||(a?o:r)("Symbol."+e))}).store=i},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=!0},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var i=n(7);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var i=n(7);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,n){var i=n(32),r=n(21);e.exports=Object.keys||function(e){return i(e,r)}},function(e,t,n){var i=n(20)("keys"),r=n(13);e.exports=function(e){return i[e]||(i[e]=r(e))}},function(e,t,n){var i=n(9),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(8)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var i=n(3).f,r=n(1),o=n(6)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},function(e,t,n){t.f=n(6)},function(e,t,n){var i=n(0),r=n(9),o=n(8),a=n(23),s=n(3).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";var i=n(8),r=n(27),o=n(30),a=n(2),s=n(17),c=n(46),u=n(22),f=n(53),m=n(6)("iterator"),_=!([].keys&&"next"in[].keys()),l=function(){return this};e.exports=function(e,t,n,d,p,g,b){c(n,t,d);var v,y,h,w=function(e){if(!_&&e in j)return j[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},x=t+" Iterator",S="values"==p,O=!1,j=e.prototype,T=j[m]||j["@@iterator"]||p&&j[p],P=T||w(p),k=p?S?w("entries"):P:void 0,E="Array"==t&&j.entries||T;if(E&&(h=f(E.call(new e)))!==Object.prototype&&h.next&&(u(h,x,!0),i||"function"==typeof h[m]||a(h,m,l)),S&&T&&"values"!==T.name&&(O=!0,P=function(){return T.call(this)}),i&&!b||!_&&!O&&j[m]||a(j,m,P),s[t]=P,s[x]=l,p)if(v={values:S?P:w("values"),keys:g?P:w("keys"),entries:k},b)for(y in v)y in j||o(j,y,v[y]);else r(r.P+r.F*(_||O),t,v);return v}},function(e,t,n){var i=n(0),r=n(9),o=n(44),a=n(2),s=n(1),c=function(e,t,n){var u,f,m,_=e&c.F,l=e&c.G,d=e&c.S,p=e&c.P,g=e&c.B,b=e&c.W,v=l?r:r[t]||(r[t]={}),y=v.prototype,h=l?i:d?i[t]:(i[t]||{}).prototype;for(u in l&&(n=t),n)(f=!_&&h&&void 0!==h[u])&&s(v,u)||(m=f?h[u]:n[u],v[u]=l&&"function"!=typeof h[u]?n[u]:g&&f?o(m,i):b&&h[u]==m?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(m):p&&"function"==typeof m?o(Function.call,m):m,p&&((v.virtual||(v.virtual={}))[u]=m,e&c.R&&y&&!y[u]&&a(y,u,m)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){e.exports=!n(4)&&!n(11)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(7),r=n(0).document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},function(e,t,n){e.exports=n(2)},function(e,t,n){var i=n(10),r=n(47),o=n(21),a=n(19)("IE_PROTO"),s=function(){},c=function(){var e,t=n(29)("iframe"),i=o.length;for(t.style.display="none",n(52).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;i--;)delete c.prototype[o[i]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=i(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:r(n,t)}},function(e,t,n){var i=n(1),r=n(5),o=n(49)(!1),a=n(19)("IE_PROTO");e.exports=function(e,t){var n,s=r(e),c=0,u=[];for(n in s)n!=a&&i(s,n)&&u.push(n);for(;t.length>c;)i(s,n=t[c++])&&(~o(u,n)||u.push(n));return u}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var i=n(32),r=n(21).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},function(e,t,n){"use strict";var i=n(37);i.keys().forEach(function(e){i(e)})},function(e,t,n){var i={"./js/script.js":38,"./sass/styles.scss":70};function r(e){return n(o(e))}function o(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=37},function(e,t,n){window.jQuery;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(39));window.wpmdb=window.wpmdb||{},wpmdb.mediaFiles={remote_media_files_unavailable:!1},function(e,t){var n=0,r=e("#mf-select-subsites-section"),o=e("#mf-select-subsites");Object.size||(Object.size=function(e){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}),Object.keys||(Object.keys=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(o){if("object"!==(void 0===o?"undefined":(0,i.default)(o))&&("function"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var a,s,c=[];for(a in o)e.call(o,a)&&c.push(a);if(t)for(s=0;s<r;s++)e.call(o,n[s])&&c.push(n[s]);return c}}());var a=function(){e("#media-files").attr("data-available","0"),e("#media-files").prop("checked",!1),e("#media-files").attr("disabled","disabled"),e(".media-files").addClass("disabled"),e(".media-files-options .expandable-content").hide()},s=function(n){var i=t.functions.wpmdb_migration_type();if(-1===e.inArray(i,["savefile","find_replace","import"])){if(e(".media-files-options").show(),e(".media-files-push").hide(),n)return e(".media-files-options ul").hide(),e(".media-migration-unavailable").show(),void a();if(void 0!==t.mediaFiles.remote_connection_data&&wpmdb_data.media_files_version!==t.mediaFiles.remote_connection_data.media_files_version)return e(".media-files-remote-location").html(t.mediaFiles.remote_connection_data.url),e(".media-file-remote-version").html(t.mediaFiles.remote_connection_data.media_files_version),e(".media-files-different-plugin-version-notice").show(),void a();if("true"===wpmdb_data.is_multisite){var s=function(){var e={};"pull"===t.functions.wpmdb_migration_type()?void 0!==t.mediaFiles.remote_connection_data&&void 0!==t.mediaFiles.remote_connection_data.subsites&&(e=t.mediaFiles.remote_connection_data.subsites):void 0!==wpmdb_data.subsites&&(e=wpmdb_data.subsites);return e}(),c=e("#_mf-selected-subsites"),u=e("#mf-selected-subsites").val();"pull"===i&&0<Object.size(s)&&c.length&&(u=e.parseJSON(c.val()),c.remove()),t.functions.update_multiselect("#mf-selected-subsites",s,u),e.wpmdb.apply_filters("wpmdbmf_enable_select_subsites",!0)?r.show():(o.prop("checked",!1),r.hide()),o.change(),d()}e(".media-files-options ul").show(),e(".media-migration-unavailable").hide(),e(".media-files-different-plugin-version-notice").hide(),e("#media-files").removeAttr("disabled"),e(".media-files").removeClass("disabled"),e("#media-files").attr("data-available","1")}else e(".media-files-options").hide()};function c(i){if(0===Object.size(i.files_to_migrate))return delete i.files_to_migrate,delete i.total_size,setTimeout(function(){e.wpmdb.do_action("wpmdbmf_media_transfer_complete")},100*t.mediaFiles.remote_connection_data.media_files_max_file_uploads),t.common.next_step_in_migration={fn:t.functions.finalise_media_migration,args:[i]},void t.functions.execute_next_step();var r=[],o=0,a=0;if(e.each(i.files_to_migrate,function(e,s){if("push"===t.functions.wpmdb_migration_type()&&s>n){var c=wpmdbmf_strings.file_too_large+" "+e+" (#124mf)<br>";t.common.non_fatal_errors+=c}else if(r.length){if(o+s>i.bottleneck||a>=t.mediaFiles.remote_connection_data.media_files_max_file_uploads)return!1;r.push(e),o+=s}else r.push(e),o+=s;delete i.files_to_migrate[e],++i.media_progress_image_number,++a}),!t.common.migration_error)return r.length?void e.ajax({url:ajaxurl,type:"POST",dataType:"text",cache:!1,data:{action:"wpmdbmf_migrate_media",migration_state_id:t.migration_state_id,file_chunk:r,nonce:wpmdb_data.nonces.migrate_media},error:function(e,n,i){t.current_migration.setState(wpmdbmf_strings.migration_failed,t.functions.wpmdbGetAjaxErrors(wpmdbmf_strings.migration_failed,"(#102mf)",e.responseText,e),"error"),console.log(e),console.log(n),console.log(i),t.common.migration_error=!0,t.functions.migration_complete_events()},success:function(n){var r=n;if(n=t.functions.wpmdb_parse_json(e.trim(n)))if(void 0===n.wpmdb_error||1!==n.wpmdb_error){if(void 0!==n.wpmdb_non_fatal_error&&1===n.wpmdb_non_fatal_error&&(t.common.non_fatal_errors+=n.body),n.transfers&&n.transfers.length){var a=0;e.each(n.transfers,function(e,n){setTimeout(function(){t.current_migration.model.getStageModel("media").setItemComplete(n.file)},a),a+=50})}i.media_progress+=o,t.common.next_step_in_migration={fn:c,args:[i]},t.functions.execute_next_step()}else u(n.body);else u(r)}}):(t.common.next_step_in_migration={fn:c,args:[i]},void t.functions.execute_next_step());t.functions.migration_complete_events()}function u(e){t.current_migration.setState(wpmdbmf_strings.migration_failed,t.functions.wpmdbGetAjaxErrors("","",e),"error"),t.common.migration_error=!0,t.functions.migration_complete_events()}function f(){return t.functions.is_media_migration()}function m(n,i){return"savefile"!==t.functions.wpmdb_migration_type()&&e("#media-files").is(":checked")&&"true"===wpmdb_data.is_multisite&&o.is(":checked")&&null===e("#mf-selected-subsites").val()&&(alert(wpmdbmf_strings.please_select_a_subsite),n=!1),n}function l(){var t=e('input[name="media_migration_option"][value="compare-remove"]');e(t).is(":checked")?e(".compare-remove-warning").show():e(".compare-remove-warning").hide()}function d(){var n=e(".mf-selected-subsites-tables-differ"),i=e("#mf-selected-subsites").val(),r=e.wpmdb.apply_filters("wpmdb_get_tables_to_migrate",null,null);if("true"===wpmdb_data.is_multisite&&o.is(":checked")&&void 0!==i&&null!==i&&void 0!==r&&null!==r&&0<r.length){var a=e.wpmdb.apply_filters("wpmdb_get_table_prefix",null,null),s=!1;e.each(r,function(n,r){if(t.functions.table_is(a,"posts",r)||t.functions.table_is(a,"postmeta",r)){var o=t.functions.subsite_for_table(a,r);if(0>e.inArray(o.toString(),i))return s=!0,!1}}),s?n.show():n.hide()}else n.hide()}function p(n){!0===f()&&-1===e.inArray(t.functions.wpmdb_migration_type(),["savefile","find_replace","import"])&&t.current_migration.model.addStage("media",[],n.dataType,{strings:{itemsName:wpmdb_strings.files}})}t.functions.prepare_remove_all_files=function(){t.mediaFiles.connection_info=e.trim(e(".pull-push-connection-info").val()).split("\n");var n=e('input[name="media_migration_option"]:checked').val();if(t.current_migration.model.setActiveStage("media"),"entire"===n){var i="removing_all_files_"+t.functions.wpmdb_migration_type();t.current_migration.setText(wpmdbmf_strings[i]);var r={remove_files:1,compare:0,offset:0};r.next_step_in_migration=t.functions.prepare_determine_media,t.common.next_step_in_migration={fn:t.functions.remove_files_recursive,args:[r]},t.functions.execute_next_step()}else t.common.next_step_in_migration={fn:t.functions.prepare_determine_media},t.functions.execute_next_step()},t.functions.remove_files_recursive=function(n){if(0!==n.remove_files){t.mediaFiles.connection_info=e.trim(e(".pull-push-connection-info").val()).split("\n");var i=n;e.ajax({url:ajaxurl,type:"POST",dataType:"text",cache:!1,data:{action:"wpmdbmf_remove_files_recursive",migration_state_id:t.migration_state_id,compare:n.compare,offset:JSON.stringify(n.offset),nonce:wpmdb_data.nonces.remove_files_recursive},error:function(e,n,i){t.current_migration.setState(wpmdbmf_strings.migration_failed,t.functions.wpmdbGetAjaxErrors(wpmdbmf_strings.error_determining,"(#101mf)",e.responseText,e),"error"),console.log(e),console.log(n),console.log(i),t.common.migration_error=!0,t.functions.migration_complete_events()},success:function(r){var o=r;(n=t.functions.wpmdb_parse_json(e.trim(r)))?void 0===n.wpmdb_error||1!==n.wpmdb_error?(void 0!==n.wpmdb_non_fatal_error&&1===n.wpmdb_non_fatal_error&&(t.common.non_fatal_errors+=n.body),n.next_step_in_migration=i.next_step_in_migration,t.common.next_step_in_migration={fn:t.functions.remove_files_recursive,args:[n]},t.functions.execute_next_step()):u(n.body):u(o)}})}else!1!==n.next_step_in_migration?(t.common.next_step_in_migration={fn:n.next_step_in_migration},t.functions.execute_next_step()):t.functions.wpmdb_call_next_hook()},t.functions.prepare_determine_media=function(){t.mediaFiles.connection_info=e.trim(e(".pull-push-connection-info").val()).split("\n"),n=0;var i=0,r=0,o=e('input[name="media_migration_option"]:checked').val();t.current_migration.setText("0% - "+wpmdbmf_strings.determining),"compare-remove"===o&&(o="compare",i=1),"entire"===o&&(r=1);var a={};e.ajax({url:ajaxurl,type:"POST",dataType:"text",cache:!1,data:{action:"wpmdbmf_prepare_determine_media",migration_state_id:t.migration_state_id,nonce:wpmdb_data.nonces.prepare_determine_media},error:function(e,n,i){t.current_migration.setState(wpmdbmf_strings.migration_failed,t.functions.wpmdbGetAjaxErrors(wpmdbmf_strings.error_determining,"(#101mf)",e.responseText,e),"error"),console.log(e),console.log(n),console.log(i),t.common.migration_error=!0,t.functions.migration_complete_events()},success:function(o){var s=o;(a=t.functions.wpmdb_parse_json(e.trim(o)))?void 0===a.wpmdb_error||1!==a.wpmdb_error?(n=a.remote_max_upload_size,a.determine_progress=0,a.remove_local_media=i,a.copy_entire_media=r,t.common.next_step_in_migration={fn:t.functions.determine_media_to_migrate_recursive,args:[a]},t.functions.execute_next_step()):u(a.body):u(s)}})},t.functions.determine_media_to_migrate_recursive=function(n){if(n.determine_progress>=n.attachment_count)return t.common.next_step_in_migration={fn:t.functions.media_successfully_determined,args:[n]},void t.functions.execute_next_step();t.mediaFiles.connection_info=e.trim(e(".pull-push-connection-info").val()).split("\n"),e.ajax({url:ajaxurl,type:"POST",dataType:"text",cache:!1,data:{action:"wpmdbmf_determine_media_to_migrate_recursive",migration_state_id:t.migration_state_id,determine_progress:n.determine_progress,attachment_count:n.attachment_count,remote_uploads_url:n.remote_uploads_url,remove_local_media:n.remove_local_media,copy_entire_media:n.copy_entire_media,blogs:n.blogs,attachment_batch_limit:n.attachment_batch_limit,nonce:wpmdb_data.nonces.determine_media_to_migrate_recursive},error:function(e,n,i){t.current_migration.setState(wpmdbmf_strings.migration_failed,wpmdbmf_strings.error_determining+" (#101mf)","error"),console.log(e),console.log(n),console.log(i),t.common.migration_error=!0,t.functions.migration_complete_events()},success:function(i){var r=i;if(i=t.functions.wpmdb_parse_json(e.trim(i)))if(void 0===i.wpmdb_error||1!==i.wpmdb_error){n.blogs=i.blogs,n.determine_progress=i.determine_progress,n.total_size=n.total_size||0,n.total_size+=i.total_size,n.files_to_migrate=n.files_to_migrate||{},_.each(i.files_to_migrate,function(e,i){n.files_to_migrate[i]=e,t.current_migration.model.addStageItem("media",i,parseInt(e/1024))}),t.current_migration.fixProgressStageWidthForScrollBar();var o=Math.min(100,100*n.determine_progress/n.attachment_count),a=Math.floor(o);e(".migration-progress-stage-container[data-stage=media]").addClass("determining-media"),e(".progress-bar",".stage-progress.media").width(o+"%"),t.current_migration.setText(a+"% - "+wpmdbmf_strings.determining),t.common.next_step_in_migration={fn:t.functions.determine_media_to_migrate_recursive,args:[n]},t.functions.execute_next_step()}else u(i.body);else u(r)}})},t.functions.media_successfully_determined=function(n){if(void 0!==n.wpmdb_error&&1===n.wpmdb_error)return t.common.non_fatal_errors+=data.body,t.common.next_step_in_migration={fn:t.functions.wpmdb_call_next_hook},void t.functions.execute_next_step();n.media_progress=0,n.media_progress_image_number=0,n.bottleneck=wpmdb_data.max_request,n.files_to_migrate=n.files_to_migrate||{};var i="migrate_media_files_"+t.functions.wpmdb_migration_type();t.current_migration.setText(wpmdbmf_strings[i]),e(".migration-progress-stage-container[data-stage=media]").removeClass("determining-media"),t.common.next_step_in_migration={fn:c,args:[n]},t.functions.execute_next_step()},t.functions.finalise_media_migration=function(e){if(1===e.remove_local_media){var n="removing_files_"+t.functions.wpmdb_migration_type();return t.current_migration.setText(wpmdbmf_strings[n]),(e={}).remove_files=1,e.compare=1,e.offset="",e.next_step_in_migration=!1,t.common.next_step_in_migration={fn:t.functions.remove_files_recursive,args:[e]},void t.functions.execute_next_step()}t.functions.wpmdb_call_next_hook()},t.functions.is_media_migration=function(){return!("1"!==e("#media-files").attr("data-available")||!e("#media-files").is(":checked"))},e(document).ready(function(){-1!==e.inArray(t.functions.wpmdb_migration_type(),["savefile","find_replace","import"])&&e(".media-files-options").hide(),e.wpmdb.add_action("move_connection_info_box",function(){s(t.mediaFiles.remote_media_files_unavailable),t.functions.wpmdb_toggle_migration_action_text()}),e.wpmdb.add_action("verify_connection_to_remote_site",function(e){t.mediaFiles.remote_connection_data=e,t.mediaFiles.remote_media_files_unavailable=void 0===e.media_files_available,s(t.mediaFiles.remote_media_files_unavailable)}),e.wpmdb.add_action("wpmdbmst_select_subsite_changed",function(){s(t.mediaFiles.remote_media_files_unavailable)}),e.wpmdb.add_filter("wpmdb_before_migration_complete_hooks",function(n){return!1===f()||-1===e.inArray(t.functions.wpmdb_migration_type(),["push","pull"])?n:(n.push(t.functions.prepare_remove_all_files),n)}),e("body").on("change","#mf-select-subsites",function(){e.wpmdb.do_action("wpmdbmf_selected_subsites_changed")}),e("body").on("change","#mf-selected-subsites",function(){e.wpmdb.do_action("wpmdbmf_selected_subsites_changed")}),e.wpmdb.add_filter("wpmdb_migration_profile_ready",m),e.wpmdb.add_action("wpmdb_tables_to_migrate_changed",d),e.wpmdb.add_action("wpmdbmf_selected_subsites_changed",d),e.wpmdb.add_action("wpmdb_add_migration_stages",p),e('input[name="media_migration_option"]').change(function(){l()}),l()})}(jQuery,wpmdb)},function(e,t,n){"use strict";t.__esModule=!0;var i=a(n(40)),r=a(n(59)),o="function"==typeof r.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===o(i.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":o(e)}},function(e,t,n){e.exports={default:n(41),__esModule:!0}},function(e,t,n){n(42),n(55),e.exports=n(23).f("iterator")},function(e,t,n){"use strict";var i=n(43)(!0);n(26)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var i=n(14),r=n(15);e.exports=function(e){return function(t,n){var o,a,s=String(r(t)),c=i(n),u=s.length;return c<0||c>=u?e?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},function(e,t,n){var i=n(45);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var i=n(31),r=n(12),o=n(22),a={};n(2)(a,n(6)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(a,{next:r(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var i=n(3),r=n(10),o=n(18);e.exports=n(4)?Object.defineProperties:function(e,t){r(e);for(var n,a=o(t),s=a.length,c=0;s>c;)i.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var i=n(33);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t,n){var i=n(5),r=n(50),o=n(51);e.exports=function(e){return function(t,n,a){var s,c=i(t),u=r(c.length),f=o(a,u);if(e&&n!=n){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}}},function(e,t,n){var i=n(14),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},function(e,t,n){var i=n(14),r=Math.max,o=Math.min;e.exports=function(e,t){return(e=i(e))<0?r(e+t,0):o(e,t)}},function(e,t,n){var i=n(0).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(1),r=n(54),o=n(19)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var i=n(15);e.exports=function(e){return Object(i(e))}},function(e,t,n){n(56);for(var i=n(0),r=n(2),o=n(17),a=n(6)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],f=i[u],m=f&&f.prototype;m&&!m[a]&&r(m,a,u),o[u]=o.Array}},function(e,t,n){"use strict";var i=n(57),r=n(58),o=n(17),a=n(5);e.exports=n(26)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(60),__esModule:!0}},function(e,t,n){n(61),n(67),n(68),n(69),e.exports=n(9).Symbol},function(e,t,n){"use strict";var i=n(0),r=n(1),o=n(4),a=n(27),s=n(30),c=n(62).KEY,u=n(11),f=n(20),m=n(22),_=n(13),l=n(6),d=n(23),p=n(24),g=n(63),b=n(64),v=n(10),y=n(7),h=n(5),w=n(16),x=n(12),S=n(31),O=n(65),j=n(66),T=n(3),P=n(18),k=j.f,E=T.f,F=O.f,M=i.Symbol,L=i.JSON,A=L&&L.stringify,C=l("_hidden"),N=l("toPrimitive"),I={}.propertyIsEnumerable,z=f("symbol-registry"),G=f("symbols"),D=f("op-symbols"),R=Object.prototype,V="function"==typeof M,W=i.QObject,J=!W||!W.prototype||!W.prototype.findChild,B=o&&u(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=k(R,t);i&&delete R[t],E(e,t,n),i&&e!==R&&E(R,t,i)}:E,H=function(e){var t=G[e]=S(M.prototype);return t._k=e,t},Q=V&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},K=function(e,t,n){return e===R&&K(D,t,n),v(e),t=w(t,!0),v(n),r(G,t)?(n.enumerable?(r(e,C)&&e[C][t]&&(e[C][t]=!1),n=S(n,{enumerable:x(0,!1)})):(r(e,C)||E(e,C,x(1,{})),e[C][t]=!0),B(e,t,n)):E(e,t,n)},q=function(e,t){v(e);for(var n,i=g(t=h(t)),r=0,o=i.length;o>r;)K(e,n=i[r++],t[n]);return e},Y=function(e){var t=I.call(this,e=w(e,!0));return!(this===R&&r(G,e)&&!r(D,e))&&(!(t||!r(this,e)||!r(G,e)||r(this,C)&&this[C][e])||t)},U=function(e,t){if(e=h(e),t=w(t,!0),e!==R||!r(G,t)||r(D,t)){var n=k(e,t);return!n||!r(G,t)||r(e,C)&&e[C][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=F(h(e)),i=[],o=0;n.length>o;)r(G,t=n[o++])||t==C||t==c||i.push(t);return i},Z=function(e){for(var t,n=e===R,i=F(n?D:h(e)),o=[],a=0;i.length>a;)!r(G,t=i[a++])||n&&!r(R,t)||o.push(G[t]);return o};V||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=_(arguments.length>0?arguments[0]:void 0),t=function(n){this===R&&t.call(D,n),r(this,C)&&r(this[C],e)&&(this[C][e]=!1),B(this,e,x(1,n))};return o&&J&&B(R,e,{configurable:!0,set:t}),H(e)}).prototype,"toString",function(){return this._k}),j.f=U,T.f=K,n(35).f=O.f=X,n(25).f=Y,n(34).f=Z,o&&!n(8)&&s(R,"propertyIsEnumerable",Y,!0),d.f=function(e){return H(l(e))}),a(a.G+a.W+a.F*!V,{Symbol:M});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)l($[ee++]);for(var te=P(l.store),ne=0;te.length>ne;)p(te[ne++]);a(a.S+a.F*!V,"Symbol",{for:function(e){return r(z,e+="")?z[e]:z[e]=M(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),a(a.S+a.F*!V,"Object",{create:function(e,t){return void 0===t?S(e):q(S(e),t)},defineProperty:K,defineProperties:q,getOwnPropertyDescriptor:U,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),L&&a(a.S+a.F*(!V||u(function(){var e=M();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(y(t)||void 0!==e)&&!Q(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),i[1]=t,A.apply(L,i)}}),M.prototype[N]||n(2)(M.prototype,N,M.prototype.valueOf),m(M,"Symbol"),m(Math,"Math",!0),m(i.JSON,"JSON",!0)},function(e,t,n){var i=n(13)("meta"),r=n(7),o=n(1),a=n(3).f,s=0,c=Object.isExtensible||function(){return!0},u=!n(11)(function(){return c(Object.preventExtensions({}))}),f=function(e){a(e,i,{value:{i:"O"+ ++s,w:{}}})},m=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!c(e))return"F";if(!t)return"E";f(e)}return e[i].i},getWeak:function(e,t){if(!o(e,i)){if(!c(e))return!0;if(!t)return!1;f(e)}return e[i].w},onFreeze:function(e){return u&&m.NEED&&c(e)&&!o(e,i)&&f(e),e}}},function(e,t,n){var i=n(18),r=n(34),o=n(25);e.exports=function(e){var t=i(e),n=r.f;if(n)for(var a,s=n(e),c=o.f,u=0;s.length>u;)c.call(e,a=s[u++])&&t.push(a);return t}},function(e,t,n){var i=n(33);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){var i=n(5),r=n(35).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(e){return a.slice()}}(e):r(i(e))}},function(e,t,n){var i=n(25),r=n(12),o=n(5),a=n(16),s=n(1),c=n(28),u=Object.getOwnPropertyDescriptor;t.f=n(4)?u:function(e,t){if(e=o(e),t=a(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return r(!i.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(24)("asyncIterator")},function(e,t,n){n(24)("observable")},function(e,t){window.jQuery}]);
//# sourceMappingURL=bundle-1412.js.map