import { cardAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"

export const cardSlotRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: cardAnatomy.keys(),
  base: {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      minWidth: "0",
      wordWrap: "break-word",
      borderRadius: "var(--card-radius)",
      color: "fg",
      textAlign: "start",
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      color: "fg.subtle",
      textStyle: "sm",
    },
    header: {
      paddingInline: "var(--card-padding)",
      paddingTop: "var(--card-padding)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    body: {
      padding: "var(--card-padding)",
      flex: "1",
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      paddingInline: "var(--card-padding)",
      paddingBottom: "var(--card-padding)",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--card-radius": "radii.md",
          "--card-padding": "spacing.4",
        },
        title: {
          textStyle: "md",
        },
      },
      md: {
        root: {
          "--card-radius": "radii.lg",
          "--card-padding": "spacing.6",
        },
        title: {
          textStyle: "lg",
        },
      },
      lg: {
        root: {
          "--card-radius": "radii.lg",
          "--card-padding": "spacing.7",
        },
        title: {
          textStyle: "xl",
        },
      },
    },

    variant: {
      elevated: {
        root: {
          bg: "bg.panel",
          boxShadow: "sm",
        },
      },
      outline: {
        root: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        root: {
          bg: "bg.subtle",
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
