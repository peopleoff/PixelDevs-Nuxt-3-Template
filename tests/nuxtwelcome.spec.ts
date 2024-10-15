// @vitest-environment nuxt

import { test, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/app.vue";

test("Welcome Nuxt Loads", async () => {
    const component = await mountSuspended(App);
    expect(component.text()).toContain('Welcome to Nuxt!')
});
