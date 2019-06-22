import {
  GridGapProps as ssGridGapProps,
  GridRowGapProps as ssGridRowGapProps,
} from "styled-system"

import { spaceKeys } from "../theme/space"

export type GridGapProps = ssGridGapProps<spaceKeys>

export type GridRowGapProps = ssGridRowGapProps<spaceKeys>
