/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { defineConfig } from "eslint/config";
import header from "eslint-plugin-simple-header";
import tseslint from "typescript-eslint";

export default defineConfig(
    { ignores: ["dist", "browser", "packages/vencord-types"] },
    {
        files: ["src/**/*.{tsx,ts,mts,mjs,js,jsx}"],
        plugins: {
            "simple-header": header,
        },
        languageOptions: {
            parser: tseslint.parser,
        },
        rules: {
            "simple-header/header": [
                "error",
                {
                    "files": [`${import.meta.dirname}/scripts/header-new.txt`, `${import.meta.dirname}/scripts/header-old.txt`],
                    "templates": { "author": [".*", "Vendicated and contributors"] }
                }
            ],
        }
    }
);
