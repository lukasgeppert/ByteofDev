<script>
	export let item;
	import dayjs from "dayjs";
</script>

<a class="rounded-md bg-base-100 p-4 shadow-md" href={item.url + "/"}>
	<img
		src={item.frontmatter.image.url}
		alt="Article header"
		class="rounded-md w-full aspect-video bg-base-300"
		loading="lazy"
	/>
	<h2 class="font-bold text-xl">{item.frontmatter.title}</h2>
	<p>{item.frontmatter.description}</p>
	<p>By {item.frontmatter.author}</p>
	<p>{dayjs(item.frontmatter.published).format("MMMM D, YYYY")}</p>
</a>
