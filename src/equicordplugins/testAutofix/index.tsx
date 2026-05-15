/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import { classes } from "@utils/misc";
import definePlugin from "@utils/types";

export default definePlugin({
    name: 'TestAutofix',
    description: 'Demo plugin to verify autofix CI works correctly.',
    authors: [Devs.prism],
});
