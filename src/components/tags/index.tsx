import { Box, Flex } from "theme-ui"

import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { convertToRem } from "../../utils/convertToRem"
import { LinkExternal } from "../link"

export const Tags: React.FC<Pick<FragmentProjectNavFragment, "tags">> = ({
  tags: data,
}) =>
  data?.length ? (
    <Flex
      as="ul"
      sx={{ flexWrap: "wrap", listStyle: "none" }}
      m={0}
      mb={16}
      padding={0}
    >
      {data.map(({ href, title }, index: number) =>
        title != null ? (
          <Box
            sx={{
              ":last-child:after": {
                display: "none",
              },
              ":after": {
                content: "'•'",
                margin: `0 ${convertToRem(9)}`,
                fontSize: `${convertToRem(12)}`,
                color: "#959595",
              },
            }}
            as="li"
            key={index}
          >
            {href ? (
              <LinkExternal href={href}>{title}</LinkExternal>
            ) : (
              <>{title}</>
            )}
          </Box>
        ) : null
      )}
    </Flex>
  ) : null
