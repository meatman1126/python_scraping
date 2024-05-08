
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as compute_rest_props, v as validate_slots, a as assign, e as exclude_internal_props, F as empty, k as insert_dev, m as group_outros, n as transition_out, o as check_outros, t as transition_in, p as detach_dev, q as bubble, r as binding_callbacks, b as create_slot, f as element, B as set_attributes, j as add_location, C as listen_dev, w as update_slot_base, x as get_all_dirty_from_scope, y as get_slot_changes, D as get_spread_update, z as text, A as set_data_dev, N as noop, a0 as onMount, a6 as onDestroy } from './index-e64ea984.js';

function getOriginalBodyPadding() {
  const style = window ? window.getComputedStyle(document.body, null) : {};

  return parseInt((style && style.getPropertyValue('padding-right')) || 0, 10);
}

function getScrollbarWidth() {
  let scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}

function isBodyOverflowing() {
  return window ? document.body.clientWidth < window.innerWidth : false;
}

function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  const fixedContent = document.querySelectorAll(
    '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  )[0];
  const bodyPadding = fixedContent
    ? parseInt(fixedContent.style.paddingRight || 0, 10)
    : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

function browserEvent(target, ...args) {
  target.addEventListener(...args);

  return () => target.removeEventListener(...args);
}

function toClassName(value) {
  let result = '';

  if (typeof value === 'string' || typeof value === 'number') {
    result += value;
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(' ');
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += ' ');
          result += key;
        }
      }
    }
  }

  return result;
}

function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(' ');
}

function getTransitionDuration(element) {
  if (!element) return 0;

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } =
    window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (
    (Number.parseFloat(transitionDuration) +
      Number.parseFloat(transitionDelay)) *
    1000
  );
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function backdropIn(node) {
  node.style.display = 'block';

  const duration = getTransitionDuration(node);

  return {
    duration,
    tick: (t) => {
      if (t === 0) {
        node.classList.add('show');
      }
    }
  };
}

function backdropOut(node) {
  node.classList.remove('show');
  const duration = getTransitionDuration(node);

  return {
    duration,
    tick: (t) => {
      if (t === 0) {
        node.style.display = 'none';
      }
    }
  };
}

function modalIn(node) {
  node.style.display = 'block';
  const duration = getTransitionDuration(node);

  return {
    duration,
    tick: (t) => {
      if (t > 0) {
        node.classList.add('show');
      }
    }
  };
}

function modalOut(node) {
  node.classList.remove('show');
  const duration = getTransitionDuration(node);

  return {
    duration,
    tick: (t) => {
      if (t === 1) {
        node.style.display = 'none';
      }
    }
  };
}

/* node_modules/sveltestrap/src/Button.svelte generated by Svelte v3.59.2 */
const file$2 = "node_modules/sveltestrap/src/Button.svelte";

// (50:0) {:else}
function create_else_block_1(ctx) {
	let button;
	let button_aria_label_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	let button_levels = [
		/*$$restProps*/ ctx[8],
		{ class: /*classes*/ ctx[6] },
		{ disabled: /*disabled*/ ctx[2] },
		{ value: /*value*/ ctx[4] },
		{
			"aria-label": button_aria_label_value = /*ariaLabel*/ ctx[7] || /*defaultAriaLabel*/ ctx[5]
		}
	];

	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = assign(button_data, button_levels[i]);
	}

	const block_1 = {
		c: function create() {
			button = element("button");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			set_attributes(button, button_data);
			add_location(button, file$2, 50, 2, 1017);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(button, null);
			}

			if (button.autofocus) button.focus();
			/*button_binding*/ ctx[21](button);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[19], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			} else {
				if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*children, $$scope*/ 65538)) {
					default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}

			set_attributes(button, button_data = get_spread_update(button_levels, [
				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8],
				(!current || dirty & /*classes*/ 64) && { class: /*classes*/ ctx[6] },
				(!current || dirty & /*disabled*/ 4) && { disabled: /*disabled*/ ctx[2] },
				(!current || dirty & /*value*/ 16) && { value: /*value*/ ctx[4] },
				(!current || dirty & /*ariaLabel, defaultAriaLabel*/ 160 && button_aria_label_value !== (button_aria_label_value = /*ariaLabel*/ ctx[7] || /*defaultAriaLabel*/ ctx[5])) && { "aria-label": button_aria_label_value }
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
			if (detaching) detach_dev(button);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			/*button_binding*/ ctx[21](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_else_block_1.name,
		type: "else",
		source: "(50:0) {:else}",
		ctx
	});

	return block_1;
}

// (34:0) {#if href}
function create_if_block(ctx) {
	let a;
	let current_block_type_index;
	let if_block;
	let a_aria_label_value;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*children*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let a_levels = [
		/*$$restProps*/ ctx[8],
		{ class: /*classes*/ ctx[6] },
		{ disabled: /*disabled*/ ctx[2] },
		{ href: /*href*/ ctx[3] },
		{
			"aria-label": a_aria_label_value = /*ariaLabel*/ ctx[7] || /*defaultAriaLabel*/ ctx[5]
		}
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	const block_1 = {
		c: function create() {
			a = element("a");
			if_block.c();
			set_attributes(a, a_data);
			add_location(a, file$2, 34, 2, 771);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			if_blocks[current_block_type_index].m(a, null);
			/*a_binding*/ ctx[20](a);
			current = true;

			if (!mounted) {
				dispose = listen_dev(a, "click", /*click_handler*/ ctx[18], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(a, null);
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8],
				(!current || dirty & /*classes*/ 64) && { class: /*classes*/ ctx[6] },
				(!current || dirty & /*disabled*/ 4) && { disabled: /*disabled*/ ctx[2] },
				(!current || dirty & /*href*/ 8) && { href: /*href*/ ctx[3] },
				(!current || dirty & /*ariaLabel, defaultAriaLabel*/ 160 && a_aria_label_value !== (a_aria_label_value = /*ariaLabel*/ ctx[7] || /*defaultAriaLabel*/ ctx[5])) && { "aria-label": a_aria_label_value }
			]));
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
			if (detaching) detach_dev(a);
			if_blocks[current_block_type_index].d();
			/*a_binding*/ ctx[20](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_if_block.name,
		type: "if",
		source: "(34:0) {#if href}",
		ctx
	});

	return block_1;
}

// (63:6) {:else}
function create_else_block_2(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	const block_1 = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_else_block_2.name,
		type: "else",
		source: "(63:6) {:else}",
		ctx
	});

	return block_1;
}

// (61:6) {#if children}
function create_if_block_2(ctx) {
	let t;

	const block_1 = {
		c: function create() {
			t = text(/*children*/ ctx[1]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*children*/ 2) set_data_dev(t, /*children*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_if_block_2.name,
		type: "if",
		source: "(61:6) {#if children}",
		ctx
	});

	return block_1;
}

// (60:10)        
function fallback_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block_2];
	const if_blocks = [];

	function select_block_type_2(ctx, dirty) {
		if (/*children*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_2(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block_1 = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_2(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: fallback_block.name,
		type: "fallback",
		source: "(60:10)        ",
		ctx
	});

	return block_1;
}

// (46:4) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	const block_1 = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_else_block.name,
		type: "else",
		source: "(46:4) {:else}",
		ctx
	});

	return block_1;
}

// (44:4) {#if children}
function create_if_block_1(ctx) {
	let t;

	const block_1 = {
		c: function create() {
			t = text(/*children*/ ctx[1]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*children*/ 2) set_data_dev(t, /*children*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_if_block_1.name,
		type: "if",
		source: "(44:4) {#if children}",
		ctx
	});

	return block_1;
}

function create_fragment$2(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*href*/ ctx[3]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block_1 = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block: block_1,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block_1;
}

function instance$2($$self, $$props, $$invalidate) {
	let ariaLabel;
	let classes;
	let defaultAriaLabel;

	const omit_props_names = [
		"class","active","block","children","close","color","disabled","href","inner","outline","size","value"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Button', slots, ['default']);
	let { class: className = '' } = $$props;
	let { active = false } = $$props;
	let { block = false } = $$props;
	let { children = undefined } = $$props;
	let { close = false } = $$props;
	let { color = 'secondary' } = $$props;
	let { disabled = false } = $$props;
	let { href = '' } = $$props;
	let { inner = undefined } = $$props;
	let { outline = false } = $$props;
	let { size = null } = $$props;
	let { value = '' } = $$props;

	function click_handler(event) {
		bubble.call(this, $$self, event);
	}

	function click_handler_1(event) {
		bubble.call(this, $$self, event);
	}

	function a_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			inner = $$value;
			$$invalidate(0, inner);
		});
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			inner = $$value;
			$$invalidate(0, inner);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(22, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(9, className = $$new_props.class);
		if ('active' in $$new_props) $$invalidate(10, active = $$new_props.active);
		if ('block' in $$new_props) $$invalidate(11, block = $$new_props.block);
		if ('children' in $$new_props) $$invalidate(1, children = $$new_props.children);
		if ('close' in $$new_props) $$invalidate(12, close = $$new_props.close);
		if ('color' in $$new_props) $$invalidate(13, color = $$new_props.color);
		if ('disabled' in $$new_props) $$invalidate(2, disabled = $$new_props.disabled);
		if ('href' in $$new_props) $$invalidate(3, href = $$new_props.href);
		if ('inner' in $$new_props) $$invalidate(0, inner = $$new_props.inner);
		if ('outline' in $$new_props) $$invalidate(14, outline = $$new_props.outline);
		if ('size' in $$new_props) $$invalidate(15, size = $$new_props.size);
		if ('value' in $$new_props) $$invalidate(4, value = $$new_props.value);
		if ('$$scope' in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		classnames,
		className,
		active,
		block,
		children,
		close,
		color,
		disabled,
		href,
		inner,
		outline,
		size,
		value,
		defaultAriaLabel,
		classes,
		ariaLabel
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(22, $$props = assign(assign({}, $$props), $$new_props));
		if ('className' in $$props) $$invalidate(9, className = $$new_props.className);
		if ('active' in $$props) $$invalidate(10, active = $$new_props.active);
		if ('block' in $$props) $$invalidate(11, block = $$new_props.block);
		if ('children' in $$props) $$invalidate(1, children = $$new_props.children);
		if ('close' in $$props) $$invalidate(12, close = $$new_props.close);
		if ('color' in $$props) $$invalidate(13, color = $$new_props.color);
		if ('disabled' in $$props) $$invalidate(2, disabled = $$new_props.disabled);
		if ('href' in $$props) $$invalidate(3, href = $$new_props.href);
		if ('inner' in $$props) $$invalidate(0, inner = $$new_props.inner);
		if ('outline' in $$props) $$invalidate(14, outline = $$new_props.outline);
		if ('size' in $$props) $$invalidate(15, size = $$new_props.size);
		if ('value' in $$props) $$invalidate(4, value = $$new_props.value);
		if ('defaultAriaLabel' in $$props) $$invalidate(5, defaultAriaLabel = $$new_props.defaultAriaLabel);
		if ('classes' in $$props) $$invalidate(6, classes = $$new_props.classes);
		if ('ariaLabel' in $$props) $$invalidate(7, ariaLabel = $$new_props.ariaLabel);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		$$invalidate(7, ariaLabel = $$props['aria-label']);

		if ($$self.$$.dirty & /*className, close, outline, color, size, block, active*/ 65024) {
			$$invalidate(6, classes = classnames(className, close ? 'btn-close' : 'btn', close || `btn${outline ? '-outline' : ''}-${color}`, size ? `btn-${size}` : false, block ? 'd-block w-100' : false, { active }));
		}

		if ($$self.$$.dirty & /*close*/ 4096) {
			$$invalidate(5, defaultAriaLabel = close ? 'Close' : null);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		inner,
		children,
		disabled,
		href,
		value,
		defaultAriaLabel,
		classes,
		ariaLabel,
		$$restProps,
		className,
		active,
		block,
		close,
		color,
		outline,
		size,
		$$scope,
		slots,
		click_handler,
		click_handler_1,
		a_binding,
		button_binding
	];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			class: 9,
			active: 10,
			block: 11,
			children: 1,
			close: 12,
			color: 13,
			disabled: 2,
			href: 3,
			inner: 0,
			outline: 14,
			size: 15,
			value: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment$2.name
		});
	}

	get class() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get active() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get block() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set block(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get children() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set children(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get close() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set close(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inner() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inner(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get outline() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set outline(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get size() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set size(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules/sveltestrap/src/InlineContainer.svelte generated by Svelte v3.59.2 */

const file$1 = "node_modules/sveltestrap/src/InlineContainer.svelte";

function create_fragment$1(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			add_location(div, file$1, 4, 0, 68);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[0],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[0])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null),
						null
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('InlineContainer', slots, ['default']);
	let x = 'wtf svelte?'; // eslint-disable-line
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InlineContainer> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ x });

	$$self.$inject_state = $$props => {
		if ('x' in $$props) x = $$props.x;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$$scope, slots];
}

class InlineContainer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "InlineContainer",
			options,
			id: create_fragment$1.name
		});
	}
}

/* node_modules/sveltestrap/src/Portal.svelte generated by Svelte v3.59.2 */
const file = "node_modules/sveltestrap/src/Portal.svelte";

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);
	let div_levels = [/*$$restProps*/ ctx[1]];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			set_attributes(div, div_data);
			add_location(div, file, 18, 0, 346);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[4](div);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[2],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[2])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [dirty & /*$$restProps*/ 2 && /*$$restProps*/ ctx[1]]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[4](null);
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
	const omit_props_names = [];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Portal', slots, ['default']);
	let ref;
	let portal;

	onMount(() => {
		portal = document.createElement('div');
		document.body.appendChild(portal);
		portal.appendChild(ref);
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.body.removeChild(portal);
		}
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			ref = $$value;
			$$invalidate(0, ref);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('$$scope' in $$new_props) $$invalidate(2, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({ onMount, onDestroy, ref, portal });

	$$self.$inject_state = $$new_props => {
		if ('ref' in $$props) $$invalidate(0, ref = $$new_props.ref);
		if ('portal' in $$props) portal = $$new_props.portal;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [ref, $$restProps, $$scope, slots, div_binding];
}

class Portal extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Portal",
			options,
			id: create_fragment.name
		});
	}
}

export { Button as B, InlineContainer as I, Portal as P, backdropOut as a, backdropIn as b, classnames as c, browserEvent as d, modalOut as e, conditionallyUpdateScrollbar as f, getOriginalBodyPadding as g, getTransitionDuration as h, modalIn as m, setScrollbarWidth as s, uuid as u };
//# sourceMappingURL=Portal-0e7e3877.js.map
