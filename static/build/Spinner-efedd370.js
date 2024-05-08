
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, f as create_slot, a as assign, c as compute_rest_props, v as validate_slots, e as exclude_internal_props, b as classnames, g as element, j as attr_dev, k as add_location, C as set_attributes, l as insert_dev, m as append_dev, x as update_slot_base, y as get_all_dirty_from_scope, z as get_slot_changes, E as get_spread_update, t as transition_in, o as transition_out, q as detach_dev, A as text, Z as validate_store, _ as component_subscribe, G as empty, n as group_outros, p as check_outros, Q as create_component, R as mount_component, T as destroy_component } from './Button-1c2619f5.js';
import { i as isLoading } from './stores-23aaa360.js';

/* node_modules/sveltestrap/src/Spinner.svelte generated by Svelte v3.59.2 */
const file$1 = "node_modules/sveltestrap/src/Spinner.svelte";

// (20:10) Loading...
function fallback_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Loading...");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block.name,
		type: "fallback",
		source: "(20:10) Loading...",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let span;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);
	let div_levels = [/*$$restProps*/ ctx[1], { role: "status" }, { class: /*classes*/ ctx[0] }];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			span = element("span");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			attr_dev(span, "class", "visually-hidden");
			add_location(span, file$1, 18, 2, 399);
			set_attributes(div, div_data);
			add_location(div, file$1, 17, 0, 344);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, span);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(span, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				dirty & /*$$restProps*/ 2 && /*$$restProps*/ ctx[1],
				{ role: "status" },
				(!current || dirty & /*classes*/ 1) && { class: /*classes*/ ctx[0] }
			]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","type","size","color"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Spinner', slots, ['default']);
	let { class: className = '' } = $$props;
	let { type = 'border' } = $$props;
	let { size = '' } = $$props;
	let { color = '' } = $$props;

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ('type' in $$new_props) $$invalidate(3, type = $$new_props.type);
		if ('size' in $$new_props) $$invalidate(4, size = $$new_props.size);
		if ('color' in $$new_props) $$invalidate(5, color = $$new_props.color);
		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		classnames,
		className,
		type,
		size,
		color,
		classes
	});

	$$self.$inject_state = $$new_props => {
		if ('className' in $$props) $$invalidate(2, className = $$new_props.className);
		if ('type' in $$props) $$invalidate(3, type = $$new_props.type);
		if ('size' in $$props) $$invalidate(4, size = $$new_props.size);
		if ('color' in $$props) $$invalidate(5, color = $$new_props.color);
		if ('classes' in $$props) $$invalidate(0, classes = $$new_props.classes);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*className, size, type, color*/ 60) {
			$$invalidate(0, classes = classnames(className, size ? `spinner-${type}-${size}` : false, `spinner-${type}`, color ? `text-${color}` : false));
		}
	};

	return [classes, $$restProps, className, type, size, color, $$scope, slots];
}

class Spinner extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { class: 2, type: 3, size: 4, color: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Spinner",
			options,
			id: create_fragment$1.name
		});
	}

	get class() {
		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get type() {
		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get size() {
		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set size(value) {
		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Spinner.svelte generated by Svelte v3.59.2 */
const file = "src/components/Spinner.svelte";

// (6:0) {#if $isLoading}
function create_if_block(ctx) {
	let div;
	let spinner;
	let current;

	spinner = new Spinner({
			props: {
				class: "scraping-spinner",
				style: "width: 100px; height: 100px;",
				type: "border",
				color: "primary"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(spinner.$$.fragment);
			attr_dev(div, "class", "overlay svelte-14ow7db");
			add_location(div, file, 6, 4, 129);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(spinner, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(spinner.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(spinner.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(spinner);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(6:0) {#if $isLoading}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*$isLoading*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*$isLoading*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*$isLoading*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $isLoading;
	validate_store(isLoading, 'isLoading');
	component_subscribe($$self, isLoading, $$value => $$invalidate(0, $isLoading = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Spinner', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Spinner> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Spinner, isLoading, $isLoading });
	return [$isLoading];
}

class Spinner_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Spinner_1",
			options,
			id: create_fragment.name
		});
	}
}

export { Spinner_1 as S };
//# sourceMappingURL=Spinner-efedd370.js.map
