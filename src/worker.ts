
async function theIOBoundOperationReturningAPromise() {
	// Sleep for 100ms
	// await new Promise(r => setTimeout(r, 100));
	// do async I/O
	await fetch("https://developers.cloudflare.com");
	return;
  }

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		ctx.waitUntil(theIOBoundOperationReturningAPromise())
		return new Response('Hello World!');
	},
};
