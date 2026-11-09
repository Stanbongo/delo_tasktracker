import { type ApiProduct } from "../api/products.api";
import { ProductBadge } from "./ProductBadge";
import { Link } from "react-router";

// Импорт шрифтов
import { RETRO_BODY, RETRO_HEADING, RETRO_MONO } from "../styles";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type ProductCardProps = { product: ApiProduct };

function ProductCard({ product }: ProductCardProps) {
  const badgeProduct = {
    stock: product.stock,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
  };

  return (
    <Card
      sx={{
        width: 345,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        flexShrink: 0,
        borderRadius: 0,
        overflow: "visible",
        border: "3px ridge #ffff00",
        boxShadow: "6px 6px 0 rgba(0,0,0,0.85)",
        backgroundColor: "#000080",
        backgroundImage: "url(/stars.svg)",
        // Используем базовый шрифт для всей карточки
        fontFamily: RETRO_BODY,
        transition: "transform 80ms steps(2), box-shadow 80ms steps(2)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: "8px 8px 0 rgba(0,0,0,0.9)",
        },
      }}
    >
      <ProductBadge product={badgeProduct} />

      <CardActionArea
        component={Link}
        to={`/products/${product.id}`}
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        {/* Фотокарточка */}
        <CardMedia
          className="border-[3px] border-white border-b-4 border-b-[#ffff00] [border-bottom-style:double] [image-rendering:pixelated] contrast-[1.05] saturate-[1.3]"
          component="img"
          alt={product.title}
          height="140"
          image={product.thumbnail}
        />

        {/* Содержимое карточки */}
        <CardContent sx={{ backgroundColor: "#fffff0", flexGrow: 1 }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 1,
              pb: 0.75,
              mb: 0.75,
              borderBottom: "1px dotted #000080",
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontFamily: RETRO_HEADING,
                fontSize: 22,
                lineHeight: 1.05,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#ff00ff",
                textShadow:
                  "1px 1px 0 #ffffff, 2px 2px 0 #00ffff, 3px 3px 0 #000000",
                wordBreak: "break-word",
                m: 0,
              }}
            >
              {product.title}
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexShrink: 0,
                fontFamily: RETRO_MONO,
                fontWeight: 900,
                fontSize: 18,
                lineHeight: 1,
                color: "#ff0000",
                bgcolor: "#ffff00",
                px: 0.75,
                py: 0.5,
                border: "2px outset #ff0000",
                whiteSpace: "nowrap",
                textShadow: "1px 1px 0 #00000055",
              }}
            >
              ${product.price}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              fontFamily: RETRO_BODY,
              fontSize: 12,
              lineHeight: 1.4,
              color: "#000080",
              bgcolor: "#e6ffe6",
              border: "1px dashed #000080",
              p: 0.75,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
