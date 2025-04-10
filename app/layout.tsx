import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { theme } from "../theme";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: 'PostNitro: %s',
        default: 'PostNitro'
    },
    description: 'AI-Powered Carousel Generator for Instagram, LinkedIn & More',
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />

                <link rel="shortcut icon" href="/favicon.svg" />

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
