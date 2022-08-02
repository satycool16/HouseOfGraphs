package org.grinvin.hog.util.graph;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Map;

public class InvariantUtils {

    private static final Map<Integer, String> statusMap = new HashMap<>();
    static {
        statusMap.put(1, "Computing");
        statusMap.put(3, "Computation time out");
        statusMap.put(0, "Pending");
    }

    /**
     * Returns a string representation of an invariant value.
     */
    public static String toString(int status, String type, Double value) {

        String str = statusMap.get(status);
        if (str != null) {
            // value not (yet) known
            return str;
        } else if (value == null) {
            return "undefined";
        } else if (type.equals("b")) {
            return value == 1.0 ? "Yes" : "No";
        } else if (value.isInfinite()) {
            if (value > 0.0) {
                return "infinity";
            } else {
                return "-infinity";
            }
        } else if (value.isNaN()) {
            // Should not occur anymore
            return "undefined";
        } else if (type.equals("i")) {
            return Integer.toString(value.intValue());
        } else {
            return doubleToString(value);
        }
    }

    private static String doubleToString(Number n){
        DecimalFormat df = new DecimalFormat("#.###");
        df.setRoundingMode(RoundingMode.HALF_UP);
        Double d = n.doubleValue();
        return df.format(d);
    }
}
