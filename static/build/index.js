
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, f as element, g as space, P as create_component, z as text, j as add_location, h as attr_dev, _ as src_url_equal, k as insert_dev, l as append_dev, Q as mount_component, N as noop, t as transition_in, n as transition_out, p as detach_dev, R as destroy_component } from './index-c8de33e2.js';
import { M as Menu } from './Menu-b6c2090d.js';
import './Portal-ea51b76c.js';

/* src/Index.svelte generated by Svelte v3.59.2 */
const file = "src/Index.svelte";

function create_fragment(ctx) {
	let div0;
	let h1;
	let t1;
	let menu;
	let t2;
	let div5;
	let div4;
	let div1;
	let a0;
	let img0;
	let img0_src_value;
	let t3;
	let h30;
	let t5;
	let p0;
	let t6;
	let br0;
	let t7;
	let t8;
	let div2;
	let a1;
	let img1;
	let img1_src_value;
	let t9;
	let h31;
	let t11;
	let p1;
	let t12;
	let br1;
	let t13;
	let t14;
	let div3;
	let img2;
	let img2_src_value;
	let t15;
	let h32;
	let t17;
	let p2;
	let current;
	menu = new Menu({ $$inline: true });

	const block = {
		c: function create() {
			div0 = element("div");
			h1 = element("h1");
			h1.textContent = "ポートフォリオ一覧";
			t1 = space();
			create_component(menu.$$.fragment);
			t2 = space();
			div5 = element("div");
			div4 = element("div");
			div1 = element("div");
			a0 = element("a");
			img0 = element("img");
			t3 = space();
			h30 = element("h3");
			h30.textContent = "企業情報取得ツール";
			t5 = space();
			p0 = element("p");
			t6 = text("企業情報の取得を自動で行うことのできるWebスクレイピングツールです。");
			br0 = element("br");
			t7 = text(" 営業リストの作成などに使用することが可能です。");
			t8 = space();
			div2 = element("div");
			a1 = element("a");
			img1 = element("img");
			t9 = space();
			h31 = element("h3");
			h31.textContent = "音声認識";
			t11 = space();
			p1 = element("p");
			t12 = text("マイクからAIに質問をすることができます。");
			br1 = element("br");
			t13 = text("生成AIを利用する際にプロンプトを書き起こすの面倒という方向けです。");
			t14 = space();
			div3 = element("div");
			img2 = element("img");
			t15 = space();
			h32 = element("h3");
			h32.textContent = "画像認識";
			t17 = space();
			p2 = element("p");
			p2.textContent = "現在製作中です。";
			add_location(h1, file, 9, 4, 219);
			attr_dev(div0, "class", "page-header p-3 mb-5 text-white bg-dark svelte-1bffvrw");
			add_location(div0, file, 8, 0, 161);
			if (!src_url_equal(img0.src, img0_src_value = getStaticImage("scraping.jpg"))) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "ポートフォリオ1");
			attr_dev(img0, "class", "svelte-1bffvrw");
			add_location(img0, file, 18, 16, 417);
			attr_dev(a0, "href", "/fileup");
			add_location(a0, file, 17, 12, 382);
			attr_dev(h30, "class", "svelte-1bffvrw");
			add_location(h30, file, 23, 12, 562);
			add_location(br0, file, 25, 51, 648);
			add_location(p0, file, 24, 12, 593);
			attr_dev(div1, "class", "card svelte-1bffvrw");
			add_location(div1, file, 16, 8, 351);
			if (!src_url_equal(img1.src, img1_src_value = getStaticImage("voice_recognition.jpg"))) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "ポートフォリオ2");
			attr_dev(img1, "class", "svelte-1bffvrw");
			add_location(img1, file, 31, 16, 800);
			attr_dev(a1, "href", "/voice");
			add_location(a1, file, 30, 12, 766);
			attr_dev(h31, "class", "svelte-1bffvrw");
			add_location(h31, file, 37, 12, 955);
			add_location(br1, file, 39, 37, 1022);
			add_location(p1, file, 38, 12, 981);
			attr_dev(div2, "class", "card svelte-1bffvrw");
			add_location(div2, file, 29, 8, 735);
			if (!src_url_equal(img2.src, img2_src_value = getStaticImage("image_recognition.jpg"))) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "ポートフォリオ3");
			attr_dev(img2, "class", "svelte-1bffvrw");
			add_location(img2, file, 44, 12, 1150);
			attr_dev(h32, "class", "svelte-1bffvrw");
			add_location(h32, file, 48, 12, 1275);
			add_location(p2, file, 49, 12, 1301);
			attr_dev(div3, "class", "card svelte-1bffvrw");
			add_location(div3, file, 43, 8, 1119);
			attr_dev(div4, "class", "card-container svelte-1bffvrw");
			add_location(div4, file, 14, 4, 287);
			attr_dev(div5, "class", "container");
			add_location(div5, file, 13, 0, 259);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, h1);
			append_dev(div0, t1);
			mount_component(menu, div0, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, a0);
			append_dev(a0, img0);
			append_dev(div1, t3);
			append_dev(div1, h30);
			append_dev(div1, t5);
			append_dev(div1, p0);
			append_dev(p0, t6);
			append_dev(p0, br0);
			append_dev(p0, t7);
			append_dev(div4, t8);
			append_dev(div4, div2);
			append_dev(div2, a1);
			append_dev(a1, img1);
			append_dev(div2, t9);
			append_dev(div2, h31);
			append_dev(div2, t11);
			append_dev(div2, p1);
			append_dev(p1, t12);
			append_dev(p1, br1);
			append_dev(p1, t13);
			append_dev(div4, t14);
			append_dev(div4, div3);
			append_dev(div3, img2);
			append_dev(div3, t15);
			append_dev(div3, h32);
			append_dev(div3, t17);
			append_dev(div3, p2);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(menu.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(menu.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(menu);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div5);
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

function getStaticImage(filename) {
	return "/static/images/" + filename;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Index', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Index> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Menu, getStaticImage });
	return [];
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Index",
			options,
			id: create_fragment.name
		});
	}
}

const app = new Index({
	target: document.body,
});

export { app as default };
//# sourceMappingURL=index.js.map
