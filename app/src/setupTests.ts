import "@testing-library/jest-dom"; // This adds jest-dom assertions such as .toBeVisible()
import "vitest-axe/extend-expect"; // Adds TypeScript hints/IntelliSense
import "vitest-canvas-mock";
import * as matchers from "vitest-axe/matchers";
import { act } from "react-dom/test-utils";
import { axe } from "vitest-axe";
import { expect } from "vitest";

// Add vitest-axe toHaveNoViolations() assertion
expect.extend(matchers);

/**
 * Run axe on some content to check for accessibility violations.
 * @param container An HTML element to inspect for violations.
 */
export async function accessibilityViolationsCheck(container?: HTMLElement) {
    if (container) {
        let axeResult;
        await act(async () => {
            axeResult = await axe(container);
        });
        expect(axeResult).toHaveNoViolations();
    }
}

// Note that additional global test behavior can be configured here, e.g. run some check after every test
