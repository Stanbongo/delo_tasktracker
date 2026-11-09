import { useState } from "react";
import { Link as RouterLink } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import type { ApiProduct } from "../api/products.api";

import { RETRO_MONO } from "../styles";

type Props = { product: ApiProduct };

import {
  retroCardSx,
  retroHeadingSx,
  retroBtnSx,
  titleBarSx,
} from "../styles/styles";

export default function ProductDetails({ product }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  const finalPrice = +(
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const images = product.images.length ? product.images : [product.thumbnail];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        fontFamily: RETRO_MONO,
      }}
    >
      {/* Основная карточка */}
      <Card sx={retroCardSx}>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box sx={{ width: { xs: "100%", md: 420 }, flexShrink: 0, p: 2 }}>
            <CardMedia
              component="img"
              image={images[activeImage]}
              alt={product.title}
              sx={{
                width: "100%",
                height: 360,
                objectFit: "contain",
                bgcolor: "#fffff0",
                border: "3px solid #ffffff",
                borderBottom: "4px double #ffff00",
                imageRendering: "pixelated",
              }}
            />
            {images.length > 1 && (
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, overflowX: "auto" }}
              >
                {images.map((src, i) => (
                  <Box
                    key={src}
                    component="img"
                    src={src}
                    alt={`${product.title} ${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    sx={{
                      width: 64,
                      height: 64,
                      objectFit: "cover",
                      cursor: "pointer",
                      imageRendering: "pixelated",
                      border:
                        i === activeImage
                          ? "3px solid #ffff00"
                          : "2px solid #ffffff",
                      boxShadow: i === activeImage ? "0 0 8px #ffff00" : "none",
                      transition: "box-shadow 80ms steps(2)",
                      "&:hover": { boxShadow: "0 0 6px #00ffff" },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>

          <Box
            sx={{
              flex: 1,
              bgcolor: "#fffff0",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {product.brand && (
              <Typography
                sx={{
                  fontFamily: RETRO_MONO,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#000080",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {product.brand} · {product.category}
              </Typography>
            )}

            <Typography
              component="h1"
              sx={{
                ...retroHeadingSx,
                fontSize: { xs: 26, md: 34 },
                lineHeight: 1.05,
                pb: 0.75,
                mb: 0.5,
                borderBottom: "1px dotted #000080",
              }}
            >
              {product.title}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                value={product.rating}
                precision={0.1}
                readOnly
                size="small"
                sx={{ color: "#ff0000" }}
              />
              <Typography
                sx={{ fontFamily: RETRO_MONO, fontSize: 12, color: "#000080" }}
              >
                {product.rating} ({product.reviews.length})
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="baseline"
              flexWrap="wrap"
              useFlexGap
            >
              <Typography
                sx={{
                  fontFamily: RETRO_MONO,
                  fontWeight: 900,
                  fontSize: 24,
                  lineHeight: 1,
                  color: "#ff0000",
                  bgcolor: "#ffff00",
                  px: 1.5,
                  py: 0.5,
                  border: "3px outset #ff0000",
                  whiteSpace: "nowrap",
                  textShadow: "1px 1px 0 #00000055",
                }}
              >
                ${finalPrice}
              </Typography>
              {product.discountPercentage > 0 && (
                <>
                  <Typography
                    sx={{
                      fontFamily: RETRO_MONO,
                      fontSize: 14,
                      color: "#808080",
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.price}
                  </Typography>
                  <Chip
                    label={`-${product.discountPercentage.toFixed(0)}%`}
                    size="small"
                    sx={{
                      bgcolor: "#ff0000",
                      color: "#ffff00",
                      fontFamily: RETRO_MONO,
                      fontWeight: 900,
                      borderRadius: 0,
                      border: "2px outset #ff0000",
                    }}
                  />
                </>
              )}
            </Stack>

            <Typography
              sx={{
                fontFamily: RETRO_MONO,
                fontSize: 13,
                fontWeight: 700,
                color:
                  product.availabilityStatus === "In Stock"
                    ? "#008000"
                    : "#ff0000",
              }}
            >
              {product.availabilityStatus} · {product.stock} шт.
            </Typography>

            <Typography
              sx={{
                fontFamily: RETRO_MONO,
                fontSize: 13,
                lineHeight: 1.4,
                color: "#000080",
                bgcolor: "#e6ffe6",
                border: "1px dashed #000080",
                p: 1,
                mt: 1,
              }}
            >
              {product.description}
            </Typography>

            {product.tags.length > 0 && (
              <Stack
                direction="row"
                spacing={0.75}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 1 }}
              >
                {product.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: "#e6e6ff",
                      color: "#000080",
                      fontFamily: RETRO_MONO,
                      fontWeight: 700,
                      borderRadius: 0,
                      border: "2px outset #000080",
                      fontSize: 11,
                    }}
                  />
                ))}
              </Stack>
            )}

            <Typography
              sx={{
                fontFamily: RETRO_MONO,
                fontSize: 11,
                color: "#808080",
                mt: "auto",
                pt: 2,
              }}
            >
              SKU: {product.sku}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <Button
                disabled={product.stock === 0}
                sx={{
                  ...retroBtnSx,
                  bgcolor: "#00ff00",
                  color: "#000080",
                  border: "3px outset #00ff00",
                  "&:hover": { bgcolor: "#00dd00" },
                  "&.Mui-disabled": {
                    bgcolor: "#999",
                    color: "#444",
                    border: "3px outset #999",
                    boxShadow: "3px 3px 0 #000",
                  },
                }}
              >
                В корзину
              </Button>
              <Button
                component={RouterLink}
                to="/products"
                sx={{
                  ...retroBtnSx,
                  bgcolor: "#000080",
                  color: "#ffff00",
                  border: "3px outset #ffff00",
                  "&:hover": { bgcolor: "#ffff00", color: "#000080" },
                }}
              >
                Назад
              </Button>
            </Stack>
          </Box>
        </Box>
      </Card>

      {/* Характеристики */}
      <Card sx={retroCardSx}>
        <Box sx={titleBarSx}>
          <Typography
            sx={{
              ...retroHeadingSx,
              fontSize: 20,
              textShadow: "1px 1px 0 #000",
            }}
          >
            Характеристики
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "#fffff0", p: 2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 1.5,
            }}
          >
            <SpecRow label="Вес" value={`${product.weight} г`} />
            <SpecRow
              label="Габариты (Ш×В×Г)"
              value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} см`}
            />
            <SpecRow label="Гарантия" value={product.warrantyInformation} />
            <SpecRow label="Доставка" value={product.shippingInformation} />
            <SpecRow label="Возврат" value={product.returnPolicy} />
            <SpecRow
              label="Мин. заказ"
              value={`${product.minimumOrderQuantity} шт.`}
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ borderBottom: "1px dotted #000080", pb: 0.5 }}>
      <Typography
        sx={{
          fontFamily: RETRO_MONO,
          fontSize: 11,
          color: "#808080",
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: RETRO_MONO,
          fontSize: 14,
          fontWeight: 700,
          color: "#000080",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
