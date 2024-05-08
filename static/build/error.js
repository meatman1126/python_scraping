
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, f as element, g as space, z as text, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, A as set_data_dev, N as noop, p as detach_dev, P as create_component, Q as mount_component, t as transition_in, n as transition_out, R as destroy_component, W as globals } from './index-c8de33e2.js';

/* src/components/ErrorMessage.svelte generated by Svelte v3.59.2 */

const file$1 = "src/components/ErrorMessage.svelte";

function create_fragment$1(ctx) {
	let div;
	let i;
	let t0;
	let p;
	let t1;
	let t2;
	let a;

	const block = {
		c: function create() {
			div = element("div");
			i = element("i");
			t0 = space();
			p = element("p");
			t1 = text(/*errorMessage*/ ctx[0]);
			t2 = space();
			a = element("a");
			a.textContent = "ログイン画面へ";
			attr_dev(i, "class", "fa fa-exclamation-triangle svelte-zqo0xu");
			attr_dev(i, "aria-hidden", "true");
			add_location(i, file$1, 5, 4, 83);
			attr_dev(p, "class", "svelte-zqo0xu");
			add_location(p, file$1, 6, 4, 149);
			attr_dev(a, "href", "/login");
			attr_dev(a, "class", "login-link svelte-zqo0xu");
			add_location(a, file$1, 7, 4, 175);
			attr_dev(div, "class", "error-container svelte-zqo0xu");
			add_location(div, file$1, 4, 0, 49);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, i);
			append_dev(div, t0);
			append_dev(div, p);
			append_dev(p, t1);
			append_dev(div, t2);
			append_dev(div, a);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*errorMessage*/ 1) set_data_dev(t1, /*errorMessage*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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
	validate_slots('ErrorMessage', slots, []);
	let { errorMessage } = $$props;

	$$self.$$.on_mount.push(function () {
		if (errorMessage === undefined && !('errorMessage' in $$props || $$self.$$.bound[$$self.$$.props['errorMessage']])) {
			console.warn("<ErrorMessage> was created without expected prop 'errorMessage'");
		}
	});

	const writable_props = ['errorMessage'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ErrorMessage> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('errorMessage' in $$props) $$invalidate(0, errorMessage = $$props.errorMessage);
	};

	$$self.$capture_state = () => ({ errorMessage });

	$$self.$inject_state = $$props => {
		if ('errorMessage' in $$props) $$invalidate(0, errorMessage = $$props.errorMessage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [errorMessage];
}

class ErrorMessage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { errorMessage: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ErrorMessage",
			options,
			id: create_fragment$1.name
		});
	}

	get errorMessage() {
		throw new Error("<ErrorMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set errorMessage(value) {
		throw new Error("<ErrorMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/Error.svelte generated by Svelte v3.59.2 */

const { Error: Error_1 } = globals;
const file = "src/Error.svelte";

function create_fragment(ctx) {
	let div;
	let errormessage;
	let current;

	errormessage = new ErrorMessage({
			props: {
				errorMessage: "システムエラーが発生しました。お手数ですが、後ほど再度お試しください。"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(errormessage.$$.fragment);
			add_location(div, file, 5, 0, 116);
		},
		l: function claim(nodes) {
			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(errormessage, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(errormessage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(errormessage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(errormessage);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Error', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Error> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ ErrorMessage });
	return [];
}

let Error$1 = class Error extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Error",
			options,
			id: create_fragment.name
		});
	}
};

const app = new Error$1({
	target: document.body,
});

export { app as default };
//# sourceMappingURL=error.js.map