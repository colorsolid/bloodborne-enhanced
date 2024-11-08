// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_王の死神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000古城_ボス戦_大魔法持続時間\u0000古城_アイテム取得順_アイテムA\u0000古城_アイテム取得順_アイテムB\u0000古城_アイテム取得順_アイテムC\u0000古城_アイテム取得順_アイテムD\u0000PC情報_古城到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000"
// @linked    [304]
// @version    3.4.2
// ==/EMEVD==

const area_id = 25;
const block_id = 0;

const cainhurst_lamp_offset = 25;
const cainhurst_lamp_id = 2501950;
const cainhurst_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10);

const queens_lamp_offset = 26;
const queens_lamp_id = 2501951;
const queens_lamp_kindle = 112100000 + (area_id * 100) + (block_id * 10) + 2;

const logarius_offset = 14;
const logarius_lamp_offset = 27;
const logarius_defeat = 12501800;
const logarius_return = 2501899;
const logarius_lamp_id = 2501952;
const logarius_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10) + 4;
const logarius_region = 2502802;
const logarius_id = 2500800;

// elevator
// hidden ladder

// constructor
$Event(0, Default, function() {
    SetEventFlag(8900+logarius_offset, OFF);
    
    InitializeEvent(13, 7900, 10000000+logarius_return, logarius_return, area_id, block_id, 8500+cainhurst_lamp_offset);
    
    InitializeEvent(cainhurst_lamp_offset, 8500, 8500+cainhurst_lamp_offset, cainhurst_lamp_id, 72112222);
    InitializeEvent(queens_lamp_offset, 8500, 8500+queens_lamp_offset, queens_lamp_id, 72112424);
    InitializeEvent(logarius_lamp_offset, 8500, 8500+logarius_lamp_offset, logarius_lamp_id, 72112323);
    
    InitializeEvent(cainhurst_lamp_offset, 8100, 8100+cainhurst_lamp_offset, 12100000 + (area_id * 100) + (block_id * 10));
    InitializeEvent(queens_lamp_offset, 8100, 8100+queens_lamp_offset, 112100000 + (area_id * 100) + (block_id * 10) + 2);
    InitializeEvent(logarius_lamp_offset, 8100, 8100+logarius_lamp_offset, 12100000 + (area_id * 100) + (block_id * 10) + 4);
    
    InitializeEvent(cainhurst_lamp_offset, 8300, cainhurst_lamp_id+2000, cainhurst_lamp_id+3000, cainhurst_lamp_id+4000, area_id, block_id, -1, cainhurst_lamp_id+6000, cainhurst_lamp_kindle);
    InitializeEvent(queens_lamp_offset, 8300, queens_lamp_id+2000, queens_lamp_id+3000, queens_lamp_id+4000, area_id, block_id, -1, queens_lamp_id+6000, queens_lamp_kindle);
    
    // rematch mode has ended 
    if(EventFlag(logarius_defeat+13) && !EventFlag(logarius_defeat-1)) {
        if (EventFlag(logarius_defeat-2)) {
            SetEventFlag(logarius_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(logarius_region, logarius_lamp_id+4000);
        }
        
        // hidden area display check
        if (EventFlag(12500819)) {
            SetEventFlag(12500819, OFF);
            SetEventFlag(12500810, ON);
        }
        SetEventFlag(logarius_defeat+13, OFF);
        SetEventFlag(logarius_defeat, ON);
        InitializeEvent(logarius_lamp_offset, 8300, logarius_lamp_id+2000, logarius_lamp_id+3000, logarius_lamp_id+4000, area_id, block_id, 999, logarius_lamp_id+6000, logarius_lamp_kindle);
    } // rematch mode started, warp player to boss trigger point
    else if (EventFlag(logarius_defeat+12) || EventFlag(logarius_defeat-1)) {
        if (EventFlag(logarius_defeat-2)) {
            SetEventFlag(logarius_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(logarius_region, logarius_lamp_id+5000);
        }
        if (EventFlag(12500810)) {
            SetEventFlag(12500810, OFF);
            SetEventFlag(12500819, ON);
        }
        else {
            SetEventFlag(12500819, OFF);
        }
        SetEventFlag(logarius_defeat, OFF);
        SetEventFlag(logarius_defeat+2, OFF);
        SetEventFlag(logarius_defeat+12, OFF);
        SetEventFlag(logarius_defeat+13, ON);
        SetEventFlag(logarius_defeat-1, OFF);
        SetEventFlag(8900+logarius_offset, ON);
        InitializeEvent(logarius_lamp_offset, 8300, logarius_lamp_id+2000, logarius_lamp_id+3000, logarius_lamp_id+5000, area_id, block_id, -1, logarius_lamp_id+6000, logarius_lamp_kindle);
    }
    else {
        InitializeEvent(logarius_lamp_offset, 8300, logarius_lamp_id+2000, logarius_lamp_id+3000, logarius_lamp_id+4000, area_id, block_id, -1, logarius_lamp_id+6000, logarius_lamp_kindle);
    }
    
    InitializeEvent(logarius_offset, 12102070, logarius_defeat+13, 0, 7457, logarius_id);
    
    InitializeEvent(logarius_offset, 8900, logarius_defeat-1, logarius_lamp_id+1000, logarius_defeat-2);
    InitializeEvent(logarius_offset, 7700, logarius_defeat+11, logarius_defeat+12, logarius_lamp_id+1000, 825000);
    
    InitializeEvent(2200, 12107000, 72112200, 2501950, 2412950);
    InitializeEvent(2201, 12107000, 72112201, 2501950, 2412951);
    InitializeEvent(2202, 12107000, 72112202, 2501950, 2412952);
    InitializeEvent(2203, 12107000, 72112203, 2501950, 2412953);
    InitializeEvent(2204, 12107000, 72112204, 2501950, 2402950);
    InitializeEvent(2205, 12107000, 72112205, 2501950, 2402951);
    InitializeEvent(2206, 12107000, 72112206, 2501950, 2422950);
    InitializeEvent(2207, 12107000, 72112207, 2501950, 2422952);
    InitializeEvent(2208, 12107000, 72112208, 2501950, 2422951);
    InitializeEvent(2209, 12107000, 72112209, 2501950, 2302950);
    InitializeEvent(2210, 12107000, 72112210, 2501950, 2302951);
    InitializeEvent(2211, 12107000, 72112211, 2501950, 2302952);
    InitializeEvent(2212, 12107000, 72112212, 2501950, 2202950);
    InitializeEvent(2213, 12107000, 72112213, 2501950, 2202951);
    InitializeEvent(2214, 12107000, 72112214, 2501950, 2702950);
    InitializeEvent(2215, 12107000, 72112215, 2501950, 2702951);
    InitializeEvent(2216, 12107000, 72112216, 2501950, 3202950);
    InitializeEvent(2217, 12107000, 72112217, 2501950, 3202952);
    InitializeEvent(2218, 12107000, 72112218, 2501950, 2802950);
    InitializeEvent(2219, 12107000, 72112219, 2501950, 2802953);
    InitializeEvent(2220, 12107000, 72112220, 2501950, 2802951);
    InitializeEvent(2221, 12107000, 72112221, 2501950, 2802952);
    InitializeEvent(2222, 12107000, 72112222, 2501950, 2502950);
    InitializeEvent(2223, 12107000, 72112223, 2501950, 2502952);
    InitializeEvent(2224, 12107000, 72112224, 2501950, 2502951);
    InitializeEvent(2225, 12107000, 72112225, 2501950, 2112950);
    InitializeEvent(2226, 12107000, 72112226, 2501950, 3202951);
    InitializeEvent(2227, 12107000, 72112227, 2501950, 3202953);
    InitializeEvent(2228, 12107000, 72112228, 2501950, 3302950);
    InitializeEvent(2229, 12107000, 72112229, 2501950, 3302951);
    InitializeEvent(2230, 12107000, 72112230, 2501950, 2602950);
    InitializeEvent(2231, 12107000, 72112231, 2501950, 2602953);
    InitializeEvent(2232, 12107000, 72112232, 2501950, 2602952);
    InitializeEvent(2233, 12107000, 72112233, 2501950, 2602951);
    InitializeEvent(2234, 12107000, 72112234, 2501950, 3402950);
    InitializeEvent(2235, 12107000, 72112235, 2501950, 3402951);
    InitializeEvent(2236, 12107000, 72112236, 2501950, 3402953);
    InitializeEvent(2237, 12107000, 72112237, 2501950, 3402952);
    InitializeEvent(2238, 12107000, 72112238, 2501950, 3502950);
    InitializeEvent(2239, 12107000, 72112239, 2501950, 3502951);
    InitializeEvent(2240, 12107000, 72112240, 2501950, 3502952);
    InitializeEvent(2241, 12107000, 72112241, 2501950, 3602950);
    InitializeEvent(2242, 12107000, 72112242, 2501950, 3602951);
    InitializeEvent(2243, 12107000, 72112243, 2501950, 3602952);
    InitializeEvent(2244, 12107000, 72112244, 2501950, 2902950);
    InitializeEvent(2245, 12107000, 72112245, 2501950, 2902951);
    InitializeEvent(2246, 12107000, 72112246, 2501950, 2902952);
    InitializeEvent(2247, 12107000, 72112247, 2501950, 2902953);
    InitializeEvent(2248, 12107000, 72112248, 2501950, 2902954);
    InitializeEvent(2249, 12107000, 72112249, 2501950, 2902955);
    InitializeEvent(2250, 12107000, 72112250, 2501950, 2902956);
    InitializeEvent(2251, 12107000, 72112251, 2501950, 2902957);
    InitializeEvent(2252, 12107000, 72112252, 2501950, 2902958);
    InitializeEvent(2253, 12107000, 72112253, 2501950, 2902959);

    InitializeEvent(2300, 12107000, 72112300, 2501952, 2412950);
    InitializeEvent(2301, 12107000, 72112301, 2501952, 2412951);
    InitializeEvent(2302, 12107000, 72112302, 2501952, 2412952);
    InitializeEvent(2303, 12107000, 72112303, 2501952, 2412953);
    InitializeEvent(2304, 12107000, 72112304, 2501952, 2402950);
    InitializeEvent(2305, 12107000, 72112305, 2501952, 2402951);
    InitializeEvent(2306, 12107000, 72112306, 2501952, 2422950);
    InitializeEvent(2307, 12107000, 72112307, 2501952, 2422952);
    InitializeEvent(2308, 12107000, 72112308, 2501952, 2422951);
    InitializeEvent(2309, 12107000, 72112309, 2501952, 2302950);
    InitializeEvent(2310, 12107000, 72112310, 2501952, 2302951);
    InitializeEvent(2311, 12107000, 72112311, 2501952, 2302952);
    InitializeEvent(2312, 12107000, 72112312, 2501952, 2202950);
    InitializeEvent(2313, 12107000, 72112313, 2501952, 2202951);
    InitializeEvent(2314, 12107000, 72112314, 2501952, 2702950);
    InitializeEvent(2315, 12107000, 72112315, 2501952, 2702951);
    InitializeEvent(2316, 12107000, 72112316, 2501952, 3202950);
    InitializeEvent(2317, 12107000, 72112317, 2501952, 3202952);
    InitializeEvent(2318, 12107000, 72112318, 2501952, 2802950);
    InitializeEvent(2319, 12107000, 72112319, 2501952, 2802953);
    InitializeEvent(2320, 12107000, 72112320, 2501952, 2802951);
    InitializeEvent(2321, 12107000, 72112321, 2501952, 2802952);
    InitializeEvent(2322, 12107000, 72112322, 2501952, 2502950);
    InitializeEvent(2323, 12107000, 72112323, 2501952, 2502952);
    InitializeEvent(2324, 12107000, 72112324, 2501952, 2502951);
    InitializeEvent(2325, 12107000, 72112325, 2501952, 2112950);
    InitializeEvent(2326, 12107000, 72112326, 2501952, 3202951);
    InitializeEvent(2327, 12107000, 72112327, 2501952, 3202953);
    InitializeEvent(2328, 12107000, 72112328, 2501952, 3302950);
    InitializeEvent(2329, 12107000, 72112329, 2501952, 3302951);
    InitializeEvent(2330, 12107000, 72112330, 2501952, 2602950);
    InitializeEvent(2331, 12107000, 72112331, 2501952, 2602953);
    InitializeEvent(2332, 12107000, 72112332, 2501952, 2602952);
    InitializeEvent(2333, 12107000, 72112333, 2501952, 2602951);
    InitializeEvent(2334, 12107000, 72112334, 2501952, 3402950);
    InitializeEvent(2335, 12107000, 72112335, 2501952, 3402951);
    InitializeEvent(2336, 12107000, 72112336, 2501952, 3402953);
    InitializeEvent(2337, 12107000, 72112337, 2501952, 3402952);
    InitializeEvent(2338, 12107000, 72112338, 2501952, 3502950);
    InitializeEvent(2339, 12107000, 72112339, 2501952, 3502951);
    InitializeEvent(2340, 12107000, 72112340, 2501952, 3502952);
    InitializeEvent(2341, 12107000, 72112341, 2501952, 3602950);
    InitializeEvent(2342, 12107000, 72112342, 2501952, 3602951);
    InitializeEvent(2343, 12107000, 72112343, 2501952, 3602952);
    InitializeEvent(2344, 12107000, 72112344, 2501952, 2902950);
    InitializeEvent(2345, 12107000, 72112345, 2501952, 2902951);
    InitializeEvent(2346, 12107000, 72112346, 2501952, 2902952);
    InitializeEvent(2347, 12107000, 72112347, 2501952, 2902953);
    InitializeEvent(2348, 12107000, 72112348, 2501952, 2902954);
    InitializeEvent(2349, 12107000, 72112349, 2501952, 2902955);
    InitializeEvent(2350, 12107000, 72112350, 2501952, 2902956);
    InitializeEvent(2351, 12107000, 72112351, 2501952, 2902957);
    InitializeEvent(2352, 12107000, 72112352, 2501952, 2902958);
    InitializeEvent(2353, 12107000, 72112353, 2501952, 2902959);

    InitializeEvent(2400, 12107000, 72112400, 2501951, 2412950);
    InitializeEvent(2401, 12107000, 72112401, 2501951, 2412951);
    InitializeEvent(2402, 12107000, 72112402, 2501951, 2412952);
    InitializeEvent(2403, 12107000, 72112403, 2501951, 2412953);
    InitializeEvent(2404, 12107000, 72112404, 2501951, 2402950);
    InitializeEvent(2405, 12107000, 72112405, 2501951, 2402951);
    InitializeEvent(2406, 12107000, 72112406, 2501951, 2422950);
    InitializeEvent(2407, 12107000, 72112407, 2501951, 2422952);
    InitializeEvent(2408, 12107000, 72112408, 2501951, 2422951);
    InitializeEvent(2409, 12107000, 72112409, 2501951, 2302950);
    InitializeEvent(2410, 12107000, 72112410, 2501951, 2302951);
    InitializeEvent(2411, 12107000, 72112411, 2501951, 2302952);
    InitializeEvent(2412, 12107000, 72112412, 2501951, 2202950);
    InitializeEvent(2413, 12107000, 72112413, 2501951, 2202951);
    InitializeEvent(2414, 12107000, 72112414, 2501951, 2702950);
    InitializeEvent(2415, 12107000, 72112415, 2501951, 2702951);
    InitializeEvent(2416, 12107000, 72112416, 2501951, 3202950);
    InitializeEvent(2417, 12107000, 72112417, 2501951, 3202952);
    InitializeEvent(2418, 12107000, 72112418, 2501951, 2802950);
    InitializeEvent(2419, 12107000, 72112419, 2501951, 2802953);
    InitializeEvent(2420, 12107000, 72112420, 2501951, 2802951);
    InitializeEvent(2421, 12107000, 72112421, 2501951, 2802952);
    InitializeEvent(2422, 12107000, 72112422, 2501951, 2502950);
    InitializeEvent(2423, 12107000, 72112423, 2501951, 2502952);
    InitializeEvent(2424, 12107000, 72112424, 2501951, 2502951);
    InitializeEvent(2425, 12107000, 72112425, 2501951, 2112950);
    InitializeEvent(2426, 12107000, 72112426, 2501951, 3202951);
    InitializeEvent(2427, 12107000, 72112427, 2501951, 3202953);
    InitializeEvent(2428, 12107000, 72112428, 2501951, 3302950);
    InitializeEvent(2429, 12107000, 72112429, 2501951, 3302951);
    InitializeEvent(2430, 12107000, 72112430, 2501951, 2602950);
    InitializeEvent(2431, 12107000, 72112431, 2501951, 2602953);
    InitializeEvent(2432, 12107000, 72112432, 2501951, 2602952);
    InitializeEvent(2433, 12107000, 72112433, 2501951, 2602951);
    InitializeEvent(2434, 12107000, 72112434, 2501951, 3402950);
    InitializeEvent(2435, 12107000, 72112435, 2501951, 3402951);
    InitializeEvent(2436, 12107000, 72112436, 2501951, 3402953);
    InitializeEvent(2437, 12107000, 72112437, 2501951, 3402952);
    InitializeEvent(2438, 12107000, 72112438, 2501951, 3502950);
    InitializeEvent(2439, 12107000, 72112439, 2501951, 3502951);
    InitializeEvent(2440, 12107000, 72112440, 2501951, 3502952);
    InitializeEvent(2441, 12107000, 72112441, 2501951, 3602950);
    InitializeEvent(2442, 12107000, 72112442, 2501951, 3602951);
    InitializeEvent(2443, 12107000, 72112443, 2501951, 3602952);
    InitializeEvent(2444, 12107000, 72112444, 2501951, 2902950);
    InitializeEvent(2445, 12107000, 72112445, 2501951, 2902951);
    InitializeEvent(2446, 12107000, 72112446, 2501951, 2902952);
    InitializeEvent(2447, 12107000, 72112447, 2501951, 2902953);
    InitializeEvent(2448, 12107000, 72112448, 2501951, 2902954);
    InitializeEvent(2449, 12107000, 72112449, 2501951, 2902955);
    InitializeEvent(2450, 12107000, 72112450, 2501951, 2902956);
    InitializeEvent(2451, 12107000, 72112451, 2501951, 2902957);
    InitializeEvent(2452, 12107000, 72112452, 2501951, 2902958);
    InitializeEvent(2453, 12107000, 72112453, 2501951, 2902959);

    SetEventFlag(72110022, OFF);
    SetEventFlag(72110122, OFF);
    SetEventFlag(72110222, OFF);
    SetEventFlag(72110322, OFF);
    SetEventFlag(72110422, OFF);
    SetEventFlag(72110522, OFF);
    SetEventFlag(72110622, OFF);
    SetEventFlag(72110722, OFF);
    SetEventFlag(72110822, OFF);
    SetEventFlag(72110922, OFF);
    SetEventFlag(72111022, OFF);
    SetEventFlag(72111122, OFF);
    SetEventFlag(72111222, OFF);
    SetEventFlag(72111322, OFF);
    SetEventFlag(72111422, OFF);
    SetEventFlag(72111522, OFF);
    SetEventFlag(72111622, OFF);
    SetEventFlag(72111722, OFF);
    SetEventFlag(72111822, OFF);
    SetEventFlag(72111922, OFF);
    SetEventFlag(72112022, OFF);
    SetEventFlag(72112122, OFF);
    SetEventFlag(72112222, OFF);
    SetEventFlag(72112322, OFF);
    SetEventFlag(72112422, OFF);
    SetEventFlag(72112522, OFF);
    SetEventFlag(72112622, OFF);
    SetEventFlag(72112722, OFF);
    SetEventFlag(72112822, OFF);
    SetEventFlag(72112922, OFF);
    SetEventFlag(72113022, OFF);
    SetEventFlag(72113122, OFF);
    SetEventFlag(72113222, OFF);
    SetEventFlag(72113322, OFF);
    SetEventFlag(72113422, OFF);
    SetEventFlag(72113522, OFF);
    SetEventFlag(72113622, OFF);
    SetEventFlag(72113722, OFF);
    SetEventFlag(72113822, OFF);
    SetEventFlag(72113922, OFF);
    SetEventFlag(72114022, OFF);
    SetEventFlag(72114122, OFF);
    SetEventFlag(72114222, OFF);
    SetEventFlag(72114322, OFF);
    SetEventFlag(72114422, OFF);
    SetEventFlag(72114522, OFF);
    SetEventFlag(72114622, OFF);
    SetEventFlag(72114722, OFF);
    SetEventFlag(72114822, OFF);
    SetEventFlag(72114922, OFF);
    SetEventFlag(72115022, OFF);
    SetEventFlag(72115122, OFF);
    SetEventFlag(72115222, OFF);
    SetEventFlag(72115322, OFF);

    SetEventFlag(72110023, OFF);
    SetEventFlag(72110123, OFF);
    SetEventFlag(72110223, OFF);
    SetEventFlag(72110323, OFF);
    SetEventFlag(72110423, OFF);
    SetEventFlag(72110523, OFF);
    SetEventFlag(72110623, OFF);
    SetEventFlag(72110723, OFF);
    SetEventFlag(72110823, OFF);
    SetEventFlag(72110923, OFF);
    SetEventFlag(72111023, OFF);
    SetEventFlag(72111123, OFF);
    SetEventFlag(72111223, OFF);
    SetEventFlag(72111323, OFF);
    SetEventFlag(72111423, OFF);
    SetEventFlag(72111523, OFF);
    SetEventFlag(72111623, OFF);
    SetEventFlag(72111723, OFF);
    SetEventFlag(72111823, OFF);
    SetEventFlag(72111923, OFF);
    SetEventFlag(72112023, OFF);
    SetEventFlag(72112123, OFF);
    SetEventFlag(72112223, OFF);
    SetEventFlag(72112323, OFF);
    SetEventFlag(72112423, OFF);
    SetEventFlag(72112523, OFF);
    SetEventFlag(72112623, OFF);
    SetEventFlag(72112723, OFF);
    SetEventFlag(72112823, OFF);
    SetEventFlag(72112923, OFF);
    SetEventFlag(72113023, OFF);
    SetEventFlag(72113123, OFF);
    SetEventFlag(72113223, OFF);
    SetEventFlag(72113323, OFF);
    SetEventFlag(72113423, OFF);
    SetEventFlag(72113523, OFF);
    SetEventFlag(72113623, OFF);
    SetEventFlag(72113723, OFF);
    SetEventFlag(72113823, OFF);
    SetEventFlag(72113923, OFF);
    SetEventFlag(72114023, OFF);
    SetEventFlag(72114123, OFF);
    SetEventFlag(72114223, OFF);
    SetEventFlag(72114323, OFF);
    SetEventFlag(72114423, OFF);
    SetEventFlag(72114523, OFF);
    SetEventFlag(72114623, OFF);
    SetEventFlag(72114723, OFF);
    SetEventFlag(72114823, OFF);
    SetEventFlag(72114923, OFF);
    SetEventFlag(72115023, OFF);
    SetEventFlag(72115123, OFF);
    SetEventFlag(72115223, OFF);
    SetEventFlag(72115323, OFF);

    SetEventFlag(72110024, OFF);
    SetEventFlag(72110124, OFF);
    SetEventFlag(72110224, OFF);
    SetEventFlag(72110324, OFF);
    SetEventFlag(72110424, OFF);
    SetEventFlag(72110524, OFF);
    SetEventFlag(72110624, OFF);
    SetEventFlag(72110724, OFF);
    SetEventFlag(72110824, OFF);
    SetEventFlag(72110924, OFF);
    SetEventFlag(72111024, OFF);
    SetEventFlag(72111124, OFF);
    SetEventFlag(72111224, OFF);
    SetEventFlag(72111324, OFF);
    SetEventFlag(72111424, OFF);
    SetEventFlag(72111524, OFF);
    SetEventFlag(72111624, OFF);
    SetEventFlag(72111724, OFF);
    SetEventFlag(72111824, OFF);
    SetEventFlag(72111924, OFF);
    SetEventFlag(72112024, OFF);
    SetEventFlag(72112124, OFF);
    SetEventFlag(72112224, OFF);
    SetEventFlag(72112324, OFF);
    SetEventFlag(72112424, OFF);
    SetEventFlag(72112524, OFF);
    SetEventFlag(72112624, OFF);
    SetEventFlag(72112724, OFF);
    SetEventFlag(72112824, OFF);
    SetEventFlag(72112924, OFF);
    SetEventFlag(72113024, OFF);
    SetEventFlag(72113124, OFF);
    SetEventFlag(72113224, OFF);
    SetEventFlag(72113324, OFF);
    SetEventFlag(72113424, OFF);
    SetEventFlag(72113524, OFF);
    SetEventFlag(72113624, OFF);
    SetEventFlag(72113724, OFF);
    SetEventFlag(72113824, OFF);
    SetEventFlag(72113924, OFF);
    SetEventFlag(72114024, OFF);
    SetEventFlag(72114124, OFF);
    SetEventFlag(72114224, OFF);
    SetEventFlag(72114324, OFF);
    SetEventFlag(72114424, OFF);
    SetEventFlag(72114524, OFF);
    SetEventFlag(72114624, OFF);
    SetEventFlag(72114724, OFF);
    SetEventFlag(72114824, OFF);
    SetEventFlag(72114924, OFF);
    SetEventFlag(72115024, OFF);
    SetEventFlag(72115124, OFF);
    SetEventFlag(72115224, OFF);
    SetEventFlag(72115324, OFF);

    InitializeEvent(0, 12107100, 72100421, 2501950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2501950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2501950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2501950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2501950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2501950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2501951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2501951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2501951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2501951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2501951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2501951, 9026);

    InitializeEvent(12, 12107100, 72100433, 2501952, 9021);
    InitializeEvent(13, 12107100, 72100434, 2501952, 9022);
    InitializeEvent(14, 12107100, 72100435, 2501952, 9023);
    InitializeEvent(15, 12107100, 72100436, 2501952, 9024);
    InitializeEvent(16, 12107100, 72100437, 2501952, 9025);
    InitializeEvent(17, 12107100, 72100438, 2501952, 9026);

    InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);

    InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);

    InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);
    
    InitializeEvent(25, 7000, 2500950, 2501950, 999, 12507800, -1);
    InitializeEvent(26, 7000, 2500951, 2501951, 999, 12507820, -1);
    
    InitializeEvent(27, 7000, 2500952, 2501952, 12501800, 12507840, logarius_defeat+13);
    InitializeEvent(logarius_offset, 8800, logarius_defeat+13, logarius_lamp_id-1000, logarius_lamp_id, logarius_lamp_id+3000);
    
    InitializeEvent(25, 7100, 72500200, 2501950);
    InitializeEvent(26, 7100, 72500201, 2501951);
    InitializeEvent(27, 7100, 72500202, 2501952);
    InitializeEvent(25, 7200, 72500100, 2501950, 2102952);
    InitializeEvent(26, 7200, 72500101, 2501951, 2102952);
    InitializeEvent(27, 7200, 72500102, 2501952, 2102952);
    InitializeEvent(25, 7300, 72102500, 2501950);
    InitializeEvent(26, 7300, 72102501, 2501951);
    InitializeEvent(27, 7300, 72102502, 2501952);
    InitializeEvent(5, 9200, 2503900);
    InitializeEvent(5, 9220, 2500710, 12504220, 12504221, 2500, 25);
    InitializeEvent(5, 9240, 2500710, 12504220, 12504221, 12504222, 25);
    InitializeEvent(5, 9260, 2500710, 12504220, 12504221, 12504222, 25);
    InitializeEvent(5, 9280, 2500710, 12504220, 12504221, 2500, 12504223, 25);
    StartTimeMeasurement(2500000, 0, Disabled);
    StartTimeMeasurement(2500001, 18, Enabled);
    InitializeEvent(0, 12500090, 0);
    InitializeEvent(0, 101, 0);
    InitializeEvent(0, 12500001, 0);
    InitializeEvent(0, 12500011, 0);
    InitializeEvent(0, 12500012, 0);
    InitializeEvent(0, 12500013, 0);
    InitializeEvent(0, 12500014, 0);
    InitializeEvent(0, 12500015, 0);
    InitializeEvent(0, 12500016, 0);
    InitializeEvent(0, 12500018, 0);
    InitializeEvent(0, 12500019, 0);
    InitializeEvent(0, 12500020, 0);
    InitializeEvent(0, 12500021, 0);
    InitializeEvent(0, 12500052, 2500790, 72500358);
    InitializeEvent(0, 12500051, 0);
    InitializeEvent(0, 12500053, 2500790, 1349, 72500358);
    InitializeEvent(0, 12500054, 2500790, 1350);
    InitializeEvent(0, 12500072, 2501011, 0);
    InitializeEvent(1, 12500072, 2501012, 1);
    InitializeEvent(0, 12500075, 0);
    InitializeEvent(0, 12500076, 0);
    InitializeEvent(0, 12500077, 0);
    RegisterLadder(12500992, 12500993, 2501502);
    InitializeEvent(0, 12500620, 2500115, 7000, 7003, 12500898);
    InitializeEvent(1, 12500620, 2500116, 7000, 7003, 12500898);
    InitializeEvent(2, 12500620, 2500118, 7000, 7003, 12500898);
    InitializeEvent(3, 12500620, 2500119, 7010, 7013, 12500898);
    InitializeEvent(4, 12500620, 2500126, 7000, 7003, 12500898);
    InitializeEvent(0, 12500740, 2500115);
    InitializeEvent(1, 12500740, 2500116);
    InitializeEvent(2, 12500740, 2500118);
    InitializeEvent(3, 12500740, 2500119);
    InitializeEvent(4, 12500740, 2500126);
    InitializeEvent(0, 12500630, 2500127, 7000, 7001);
    InitializeEvent(1, 12500630, 2500128, 7010, 7011);
    InitializeEvent(2, 12500630, 2500129, 7000, 7001);
    InitializeEvent(3, 12500630, 2500132, 7010, 7011);
    InitializeEvent(4, 12500630, 2500137, 7010, 7011);
    InitializeEvent(5, 12500630, 2500138, 7000, 7001);
    InitializeEvent(0, 12500454, 2500172, 7023, 7013, 2502020, -1, 122008, 122009, 150);
    InitializeEvent(1, 12500454, 2500173, 7010, 7017, 2502021, -1, 122008, 122009, 150);
    InitializeEvent(2, 12500454, 2500182, 7028, 7018, 2502024, -1, 122008, 122009, 150);
    InitializeEvent(3, 12500454, 2500183, 7029, 7019, 2502024, -1, 122008, 122009, 150);
    InitializeEvent(0, 12500458, 2500160, 7015, 2502022, 100, 2502023, 7025);
    InitializeEvent(1, 12500458, 2500161, 7016, 2502023, 100, 2502022, 7026);
    InitializeEvent(0, 12500640, 2500200);
    InitializeEvent(1, 12500640, 2500201);
    InitializeEvent(2, 12500640, 2500202);
    InitializeEvent(3, 12500640, 2500203);
    InitializeEvent(4, 12500640, 2500204);
    InitializeEvent(5, 12500640, 2500205);
    InitializeEvent(6, 12500640, 2500207);
    InitializeEvent(7, 12500640, 2500208);
    InitializeEvent(8, 12500640, 2500209);
    InitializeEvent(9, 12500640, 2500210);
    InitializeEvent(10, 12500640, 2500211);
    InitializeEvent(11, 12500640, 2500212);
    InitializeEvent(12, 12500640, 2500213);
    InitializeEvent(13, 12500640, 2500217);
    InitializeEvent(14, 12500640, 2500218);
    InitializeEvent(15, 12500640, 2500219);
    InitializeEvent(16, 12500640, 2500220);
    InitializeEvent(17, 12500640, 2500222);
    InitializeEvent(18, 12500640, 2500223);
    InitializeEvent(19, 12500640, 2500224);
    InitializeEvent(20, 12500640, 2500230);
    InitializeEvent(21, 12500640, 2500231);
    InitializeEvent(22, 12500640, 2500232);
    InitializeEvent(23, 12500640, 2500233);
    InitializeEvent(24, 12500640, 2500234);
    InitializeEvent(25, 12500640, 2500236);
    InitializeEvent(26, 12500640, 2500237);
    InitializeEvent(27, 12500640, 2500238);
    InitializeEvent(28, 12500640, 2500240);
    InitializeEvent(29, 12500640, 2500241);
    InitializeEvent(30, 12500640, 2500243);
    InitializeEvent(31, 12500640, 2500245);
    InitializeEvent(32, 12500640, 2500246);
    InitializeEvent(33, 12500640, 2500248);
    InitializeEvent(34, 12500640, 2500249);
    InitializeEvent(35, 12500640, 2500250);
    InitializeEvent(36, 12500640, 2500251);
    InitializeEvent(37, 12500640, 2500252);
    InitializeEvent(38, 12500640, 2500254);
    InitializeEvent(39, 12500640, 2500255);
    InitializeEvent(40, 12500640, 2500256);
    InitializeEvent(41, 12500640, 2500272);
    InitializeEvent(42, 12500640, 2500273);
    InitializeEvent(43, 12500640, 2500274);
    InitializeEvent(44, 12500640, 2500275);
    InitializeEvent(45, 12500640, 2500276);
    InitializeEvent(0, 12500078, 0);
    InitializeEvent(0, 12500896, 2502102);
    InitializeEvent(0, 12500898, 52500200, 52500210, 52500220, 52500230);
    InitializeEvent(0, 12500900, 2500200, 12500898, 12505200);
    InitializeEvent(1, 12500900, 2500201, 12500898, 12505201);
    InitializeEvent(2, 12500900, 2500202, 12500898, 12505202);
    InitializeEvent(3, 12500900, 2500203, 12500898, 12505203);
    InitializeEvent(4, 12500900, 2500204, 12500898, 12505204);
    InitializeEvent(5, 12500900, 2500205, 12500898, 12505205);
    InitializeEvent(6, 12500900, 2500207, 12500898, 12505207);
    InitializeEvent(7, 12500900, 2500208, 12500898, 12505208);
    InitializeEvent(8, 12500900, 2500209, 12500898, 12505209);
    InitializeEvent(9, 12500900, 2500210, 12500898, 12505210);
    InitializeEvent(10, 12500900, 2500211, 12500898, 12505211);
    InitializeEvent(11, 12500900, 2500212, 12500898, 12505212);
    InitializeEvent(12, 12500900, 2500213, 12500898, 12505213);
    InitializeEvent(13, 12500900, 2500217, 12500896, 12505217);
    InitializeEvent(14, 12500900, 2500218, 12500896, 12505218);
    InitializeEvent(15, 12500900, 2500219, 12500896, 12505219);
    InitializeEvent(16, 12500900, 2500220, 12500896, 12505220);
    InitializeEvent(17, 12500900, 2500222, 12500896, 12505222);
    InitializeEvent(18, 12500900, 2500223, 12500896, 12505223);
    InitializeEvent(19, 12500900, 2500224, 12500896, 12505224);
    InitializeEvent(20, 12500900, 2500230, 12500078, 12505230);
    InitializeEvent(21, 12500900, 2500231, 12500078, 12505231);
    InitializeEvent(22, 12500900, 2500232, 12500078, 12505232);
    InitializeEvent(23, 12500900, 2500233, 12500078, 12505233);
    InitializeEvent(24, 12500900, 2500234, 12500078, 12505234);
    InitializeEvent(25, 12500900, 2500236, 12500078, 12505236);
    InitializeEvent(26, 12500900, 2500237, 12500078, 12505237);
    InitializeEvent(27, 12500900, 2500238, 12500078, 12505238);
    InitializeEvent(28, 12500900, 2500240, 12500078, 12505240);
    InitializeEvent(29, 12500900, 2500241, 12500078, 12505241);
    InitializeEvent(30, 12500900, 2500243, 12500078, 12505243);
    InitializeEvent(31, 12500900, 2500245, 12500078, 12505245);
    InitializeEvent(32, 12500900, 2500246, 12500078, 12505246);
    InitializeEvent(33, 12500900, 2500248, 12500078, 12505248);
    InitializeEvent(34, 12500900, 2500249, 12500078, 12505249);
    InitializeEvent(35, 12500900, 2500250, 12500078, 12505250);
    InitializeEvent(36, 12500900, 2500251, 12500078, 12505251);
    InitializeEvent(37, 12500900, 2500252, 12500898, 12505252);
    InitializeEvent(38, 12500900, 2500254, 12500898, 12505254);
    InitializeEvent(39, 12500900, 2500255, 12500898, 12505255);
    InitializeEvent(40, 12500900, 2500256, 12500898, 12505256);
    InitializeEvent(41, 12500900, 2500272, 12500078, 12505272);
    InitializeEvent(42, 12500900, 2500273, 12500078, 12505273);
    InitializeEvent(43, 12500900, 2500274, 12500078, 12505274);
    InitializeEvent(44, 12500900, 2500275, 12500078, 12505275);
    InitializeEvent(45, 12500900, 2500276, 12500078, 12505276);
    InitializeEvent(0, 12505000, 2500200, 12505200);
    InitializeEvent(1, 12505000, 2500201, 12505201);
    InitializeEvent(2, 12505000, 2500202, 12505202);
    InitializeEvent(3, 12505000, 2500203, 12505203);
    InitializeEvent(4, 12505000, 2500204, 12505204);
    InitializeEvent(5, 12505000, 2500205, 12505205);
    InitializeEvent(6, 12505000, 2500207, 12505207);
    InitializeEvent(7, 12505000, 2500208, 12505208);
    InitializeEvent(8, 12505000, 2500209, 12505209);
    InitializeEvent(9, 12505000, 2500210, 12505210);
    InitializeEvent(10, 12505000, 2500211, 12505211);
    InitializeEvent(11, 12505000, 2500212, 12505212);
    InitializeEvent(12, 12505000, 2500213, 12505213);
    InitializeEvent(13, 12505000, 2500217, 12505217);
    InitializeEvent(14, 12505000, 2500218, 12505218);
    InitializeEvent(15, 12505000, 2500219, 12505219);
    InitializeEvent(16, 12505000, 2500220, 12505220);
    InitializeEvent(17, 12505000, 2500222, 12505222);
    InitializeEvent(18, 12505000, 2500223, 12505223);
    InitializeEvent(19, 12505000, 2500224, 12505224);
    InitializeEvent(20, 12505000, 2500230, 12505230);
    InitializeEvent(21, 12505000, 2500231, 12505231);
    InitializeEvent(22, 12505000, 2500232, 12505232);
    InitializeEvent(23, 12505000, 2500233, 12505233);
    InitializeEvent(24, 12505000, 2500234, 12505234);
    InitializeEvent(25, 12505000, 2500236, 12505236);
    InitializeEvent(26, 12505000, 2500237, 12505237);
    InitializeEvent(27, 12505000, 2500238, 12505238);
    InitializeEvent(28, 12505000, 2500240, 12505240);
    InitializeEvent(29, 12505000, 2500241, 12505241);
    InitializeEvent(30, 12505000, 2500243, 12505243);
    InitializeEvent(31, 12505000, 2500245, 12505245);
    InitializeEvent(32, 12505000, 2500246, 12505246);
    InitializeEvent(33, 12505000, 2500248, 12505248);
    InitializeEvent(34, 12505000, 2500249, 12505249);
    InitializeEvent(35, 12505000, 2500250, 12505250);
    InitializeEvent(36, 12505000, 2500251, 12505251);
    InitializeEvent(37, 12505000, 2500252, 12505252);
    InitializeEvent(38, 12505000, 2500254, 12505254);
    InitializeEvent(39, 12505000, 2500255, 12505255);
    InitializeEvent(40, 12505000, 2500256, 12505256);
    InitializeEvent(41, 12505000, 2500272, 12505272);
    InitializeEvent(42, 12505000, 2500273, 12505273);
    InitializeEvent(43, 12505000, 2500274, 12505274);
    InitializeEvent(44, 12505000, 2500275, 12505275);
    InitializeEvent(45, 12505000, 2500276, 12505276);
    InitializeEvent(0, 12505300, 12505200);
    InitializeEvent(1, 12505300, 12505201);
    InitializeEvent(2, 12505300, 12505202);
    InitializeEvent(3, 12505300, 12505203);
    InitializeEvent(4, 12505300, 12505204);
    InitializeEvent(5, 12505300, 12505205);
    InitializeEvent(6, 12505300, 12505207);
    InitializeEvent(7, 12505300, 12505208);
    InitializeEvent(8, 12505300, 12505209);
    InitializeEvent(9, 12505300, 12505210);
    InitializeEvent(10, 12505300, 12505211);
    InitializeEvent(11, 12505300, 12505212);
    InitializeEvent(12, 12505300, 12505213);
    InitializeEvent(13, 12505300, 12505217);
    InitializeEvent(14, 12505300, 12505218);
    InitializeEvent(15, 12505300, 12505219);
    InitializeEvent(16, 12505300, 12505220);
    InitializeEvent(17, 12505300, 12505222);
    InitializeEvent(18, 12505300, 12505223);
    InitializeEvent(19, 12505300, 12505224);
    InitializeEvent(20, 12505300, 12505230);
    InitializeEvent(21, 12505300, 12505231);
    InitializeEvent(22, 12505300, 12505232);
    InitializeEvent(23, 12505300, 12505233);
    InitializeEvent(24, 12505300, 12505234);
    InitializeEvent(25, 12505300, 12505236);
    InitializeEvent(26, 12505300, 12505237);
    InitializeEvent(27, 12505300, 12505238);
    InitializeEvent(28, 12505300, 12505240);
    InitializeEvent(29, 12505300, 12505241);
    InitializeEvent(30, 12505300, 12505243);
    InitializeEvent(31, 12505300, 12505245);
    InitializeEvent(32, 12505300, 12505246);
    InitializeEvent(33, 12505300, 12505248);
    InitializeEvent(34, 12505300, 12505249);
    InitializeEvent(35, 12505300, 12505250);
    InitializeEvent(36, 12505300, 12505251);
    InitializeEvent(37, 12505300, 12505252);
    InitializeEvent(38, 12505300, 12505254);
    InitializeEvent(39, 12505300, 12505255);
    InitializeEvent(40, 12505300, 12505256);
    InitializeEvent(41, 12505300, 12505272);
    InitializeEvent(42, 12505300, 12505273);
    InitializeEvent(43, 12505300, 12505274);
    InitializeEvent(44, 12505300, 12505275);
    InitializeEvent(45, 12505300, 12505276);
    InitializeEvent(0, 12501000, 2500200);
    InitializeEvent(1, 12501000, 2500201);
    InitializeEvent(2, 12501000, 2500202);
    InitializeEvent(3, 12501000, 2500203);
    InitializeEvent(4, 12501000, 2500204);
    InitializeEvent(5, 12501000, 2500205);
    InitializeEvent(6, 12501000, 2500207);
    InitializeEvent(7, 12501000, 2500208);
    InitializeEvent(8, 12501000, 2500209);
    InitializeEvent(9, 12501000, 2500210);
    InitializeEvent(10, 12501000, 2500211);
    InitializeEvent(11, 12501000, 2500212);
    InitializeEvent(12, 12501000, 2500213);
    InitializeEvent(13, 12501000, 2500217);
    InitializeEvent(14, 12501000, 2500218);
    InitializeEvent(15, 12501000, 2500219);
    InitializeEvent(16, 12501000, 2500220);
    InitializeEvent(17, 12501000, 2500222);
    InitializeEvent(18, 12501000, 2500223);
    InitializeEvent(19, 12501000, 2500224);
    InitializeEvent(20, 12501000, 2500230);
    InitializeEvent(21, 12501000, 2500231);
    InitializeEvent(22, 12501000, 2500232);
    InitializeEvent(23, 12501000, 2500233);
    InitializeEvent(24, 12501000, 2500234);
    InitializeEvent(25, 12501000, 2500236);
    InitializeEvent(26, 12501000, 2500237);
    InitializeEvent(27, 12501000, 2500238);
    InitializeEvent(28, 12501000, 2500240);
    InitializeEvent(29, 12501000, 2500243);
    InitializeEvent(32, 12501000, 2500248);
    InitializeEvent(33, 12501000, 2500249);
    InitializeEvent(34, 12501000, 2500250);
    InitializeEvent(35, 12501000, 2500251);
    InitializeEvent(36, 12501000, 2500252);
    InitializeEvent(37, 12501000, 2500254);
    InitializeEvent(38, 12501000, 2500255);
    InitializeEvent(39, 12501000, 2500256);
    InitializeEvent(40, 12501000, 2500272);
    InitializeEvent(41, 12501000, 2500273);
    InitializeEvent(42, 12501000, 2500274);
    InitializeEvent(43, 12501000, 2500275);
    InitializeEvent(0, 12500030, 0);
    InitializeEvent(0, 12500031, 12501200, 2501200);
    InitializeEvent(1, 12500031, 12501204, 2501204);
    InitializeEvent(2, 12500031, 12501205, 2501205);
    InitializeEvent(3, 12500031, 12501208, 2501208);
    InitializeEvent(4, 12500031, 12501209, 2501209);
    InitializeEvent(5, 12500031, 12501210, 2501210);
    InitializeEvent(6, 12500031, 12501211, 2501211);
    InitializeEvent(0, 12500200, 12500250, 12500259);
    InitializeEvent(1, 12500200, 12500270, 12500279);
    InitializeEvent(0, 12500206, 2500114, 12500250, 12500270);
    InitializeEvent(0, 12500220, 2500114, 12500270);
    InitializeEvent(1, 12500206, 2500115, 12500251, 12500271);
    InitializeEvent(1, 12500220, 2500115, 12500271);
    InitializeEvent(2, 12500206, 2500116, 12500252, 12500272);
    InitializeEvent(2, 12500220, 2500116, 12500272);
    InitializeEvent(4, 12500206, 2500118, 12500254, 12500274);
    InitializeEvent(4, 12500220, 2500118, 12500274);
    InitializeEvent(5, 12500206, 2500122, 12500255, 12500275);
    InitializeEvent(5, 12500220, 2500122, 12500275);
    InitializeEvent(6, 12500206, 2500123, 12500256, 12500276);
    InitializeEvent(6, 12500220, 2500123, 12500276);
    InitializeEvent(7, 12500206, 2500124, 12500257, 12500277);
    InitializeEvent(7, 12500220, 2500124, 12500277);
    InitializeEvent(8, 12500206, 2500132, 12500259, 12500279);
    InitializeEvent(8, 12500220, 2500132, 12500279);
    InitializeEvent(0, 12500520, 2500211, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(1, 12500520, 2500208, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(2, 12500520, 2500204, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(3, 12500520, 2500200, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(4, 12500520, 2500255, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(5, 12500520, 2500207, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(6, 12500520, 2500217, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(7, 12500520, 2500220, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(8, 12500520, 2500224, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(9, 12500520, 2500230, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(10, 12500520, 2500231, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(11, 12500520, 2500238, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(12, 12500520, 2500236, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(13, 12500520, 2500272, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(14, 12500520, 2500275, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(15, 12500520, 2500274, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(16, 12500520, 2500250, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(17, 12500520, 2500249, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(18, 12500520, 2500243, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(19, 12500520, 2500251, 7000, 7001, 1077936128, 1077936128);
    InitializeEvent(20, 12500520, 2500245, 7002, 0, 1084227584, 1097859072);
    InitializeEvent(21, 12500520, 2500104, 7001, 7007, 1092616192, 1092616192);
    InitializeEvent(22, 12500520, 2500105, 7001, 7007, 1092616192, 1092616192);
    InitializeEvent(23, 12500520, 2500106, 7002, 0, 1084227584, 1084227584);
    InitializeEvent(0, 12500100, 2500280, 1090519040);
    InitializeEvent(1, 12500100, 2500281, 1098907648);
    InitializeEvent(2, 12500100, 2500282, 1091567616);
    InitializeEvent(3, 12500100, 2500284, 1090519040);
    InitializeEvent(4, 12500100, 2500285, 1088421888);
    InitializeEvent(5, 12500100, 2500292, 1090519040);
    InitializeEvent(6, 12500100, 2500293, 1088421888);
    InitializeEvent(7, 12500100, 2500294, 1091567616);
    InitializeEvent(0, 12500070, 2501020, 2502030);
    InitializeEvent(1, 12500070, 2501207, 2502031);
    InitializeEvent(0, 12505100, 2500101, 7020, 2502050, 2502030);
    InitializeEvent(1, 12505100, 2500102, 7021, 2502051, 2502031);
    InitializeEvent(2, 12505100, 2500103, 7022, 2502052, 2502032);
    InitializeEvent(0, 12500285, 2500352, 1099956224, 2500308);
    InitializeEvent(1, 12500285, 2500308, 1112014848, 0);
    InitializeEvent(2, 12500285, 2500353, 1102053376, 2500352);
    InitializeEvent(3, 12500285, 2500354, 1099956224, 2500353);
    InitializeEvent(0, 12500235, 2500210, 12500898);
    InitializeEvent(0, 12500390, 2500180);
    InitializeEvent(0, 12500435, 2500133, 2502150);
    InitializeEvent(0, 12500440, 2500134, 2500135);
    InitializeEvent(0, 12500501, 0);
    InitializeEvent(0, 12500502, 2500136, 52500190, 2502409);
    InitializeEvent(0, 12500400, 2500400, 52500990);
    InitializeEvent(1, 12500400, 2500401, 52500980);
    InitializeEvent(2, 12500400, 2500402, 52500970);
    InitializeEvent(3, 12500400, 2500403, 52500960);
    InitializeEvent(4, 12500400, 2500404, 52500950);
    InitializeEvent(0, 12504812, 0);
    InitializeEvent(0, 12504813, 0);
    InitializeEvent(0, 12501800, 0);
    InitializeEvent(0, 12501801, 0);
    InitializeEvent(0, 12501802, 0);
    InitializeEvent(0, 12504810, 0);
    InitializeEvent(0, 12504811, 0);
    InitializeEvent(0, 12504802, 0);
    InitializeEvent(0, 12504803, 0);
    InitializeEvent(0, 12504804, 0);
    InitializeEvent(0, 12504805, 0);
    InitializeEvent(0, 12504806, 0);
    InitializeEvent(0, 12504806, 0);
    InitializeEvent(0, 12504807, 0);
    InitializeEvent(0, 12504808, 0);
    InitializeEvent(0, 12501804, 0);
    InitializeEvent(0, 12500810, 0);
    InitializeEvent(0, 12501803, 0);
    InitializeEvent(0, 12500600, 0);
});

// preconstructor
$Event(50, Default, function() {
    InitializeEvent(0, 12500010, 0);
    InitializeEvent(0, 12500050, 0);
    SetMapSoundState(2503900, Disabled);
    InitializeEvent(0, 12500000, 0);
});

// Old castle_first arrival poly drama
$Event(12500000, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12200134, ON);
    PlayCutsceneToPlayer(25000000, CutscenePlayMode.SkippableWithFadeOut, 10000);
    WaitFixedTimeFrames(1);
    InitializeEvent(25, 12102220, 2501950, 2500950);
    InitializeEvent(26, 12102220, 2501951, 2500951);
    InitializeEvent(27, 12102220, 2501952, 2500952);
    AwardAchievement(10);
    SetEventFlag(9180, OFF);
});

// Enter the queen's room and get the SAN value
$Event(12500001, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(InArea(10000, 2502500));
    InitializeEvent(0, 9350, 2);
});

// Queen of Filthy Bloodline_Initialization
$Event(12500010, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(1041)) {
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1042, ON);
        }
L1:
        if (EventFlag(1042) && EventFlag(72500328)) {
            SetEventFlag(72500328, OFF);
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1040, ON);
        }
L2:
        if (EventFlag(1040) && (EventFlag(1347) || EventFlag(1348) || EventFlag(1349))) {
            BatchSetEventFlags(1040, 1059, OFF);
            SetEventFlag(1042, ON);
        }
L3:
        SetEventFlag(72500320, OFF);
        SetEventFlag(72500312, OFF);
        SetEventFlag(72500312, OFF);
    }
L0:
    SetCharacterMaphits(2500600, true);
    SetCharacterImmortality(2500600, Enabled);
    SetCharacterHPBarDisplay(2500600, Disabled);
    SetDistanceLimitForConversationStateProcessing(2500600, 60);
    GotoIf(L0, EventFlag(1040));
    GotoIf(L0, EventFlag(1041));
    GotoIf(L1, EventFlag(1042));
L0:
    SetCharacterBackreadState(2500600, false);
    DeactivateObject(2501015, Enabled);
    DeactivateObject(2501016, Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    ForceAnimationPlayback(2500600, 103010, true, false, true);
    EndEvent();
L1:
    SetCharacterBackreadState(2500600, true);
    DeactivateObject(2501015, Disabled);
    DeactivateObject(2501016, Enabled);
    EndEvent();
});

// Queen of the Dirty Bloodline_Kneeling area determination
$Event(12500011, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500330, OFF);
    WaitFor(InArea(10000, 2502501));
    SetEventFlag(72500330, ON);
    WaitFor(!InArea(10000, 2502501));
    SetEventFlag(72500330, OFF);
    RestartEvent();
});

// Queen of the Tainted Bloodline_PC kneels
$Event(12500012, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500329, OFF);
    WaitFor(EventFlag(72500329));
    RotateCharacter(10000, 2500600, 101260, false);
    WaitFor(!EventFlag(72500329));
    ForceAnimationPlayback(10000, 101262, false, false, false);
    RestartEvent();
});

// Queen of the Dirty Bloodline_Blood offering anime
$Event(12500013, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500339, OFF);
    WaitFor(EventFlag(72500339));
    ForceAnimationPlayback(2500600, 103013, false, false, false);
    ForceAnimationPlayback(10000, 101263, false, false, false);
    WaitFixedTimeFrames(180);
    SetEventFlag(72500339, OFF);
    RestartEvent();
});

// Queen of the Dirty Bloodline_Blood-giving anime
$Event(12500014, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500337, OFF);
    WaitFor(EventFlag(72500337));
    ForceAnimationPlayback(2500600, 103013, false, false, false);
    ForceAnimationPlayback(10000, 101263, false, false, false);
    WaitFixedTimeFrames(180);
    SetEventFlag(72500337, OFF);
    RestartEvent();
});

// Queen of the Dirty Bloodline_Damage received
$Event(12500015, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(HasDamageType(2500600, 10000, DamageType.Unspecified));
    IncrementEventValue(72500304, 6, 50);
    if (EventValue(72500304, 6) < 50) {
        ForceAnimationPlayback(2500600, 103014, false, false, false);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(2500600, 103011, false, false, false);
    BatchSetEventFlags(1040, 1059, OFF);
    SetEventFlag(1041, ON);
    SaveRequest(0);
    RestartEvent();
});

// Queen of the Tainted Bloodline_Return to standby after receiving damage
$Event(12500016, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterHasSpEffect(2500600, 151) && EventValue(72500304, 6) < 50);
    ForceAnimationPlayback(2500600, 103010, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Queen of the Dirty Bloodline_SAN value increases when you see a lump of flesh
$Event(12500018, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    areaFlag = InArea(10000, 2502500) && EventFlag(1042);
    InitializeEvent(0, 9350, 3);
});

// Queen of the Dirty Bloodline_Kneeling Count
$Event(12500019, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500333, OFF);
    WaitFor(EventFlag(72500333));
    SetEventFlag(72500333, OFF);
    EndIf(!EventFlag(72500332));
    IncrementEventValue(72500317, 3, 5);
    if (EventValue(72500317, 3) >= 5) {
        SetEventFlag(72500335, ON);
    }
});

// Queen of the Dirty Bloodline_Meat acquisition
$Event(12500020, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(1042));
    WaitFor(ActionButtonInArea(2500020, 2501016));
    if (PlayerHasItem(ItemType.Goods, 4305)) {
        DisplayGenericDialog(10010150, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    ForceAnimationPlayback(10000, 101140, false, false, false);
    SetEventFlag(9043, ON);
    RestartEvent();
});

// Queen of the Dirty Bloodline_Calling conversation area determination
$Event(12500021, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(72500331, OFF);
    WaitFor(InArea(10000, 2502500));
    SetEventFlag(72500331, ON);
    WaitFor(!InArea(10000, 2502500));
    SetEventFlag(72500331, OFF);
    RestartEvent();
});

// PC_White Breath
$Event(12500030, Default, function() {
    WaitFor(PlayerInMap(25, 0));
    SetSpEffect(10000, 4650, false);
});

// Treasure chest_open
$Event(12500031, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, -1, Disabled);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X4_4, Enabled);
});

// Bloodline hunting_Initialization
$Event(12500050, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(1347)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1348, ON);
        }
L1:
        if (EventFlag(1351) && EventFlag(72500359)) {
            BatchSetEventFlags(1340, 1359, OFF);
            SetEventFlag(1343, ON);
        }
L2:
        NoOp();
    }
L0:
    GotoIf(L0, EventFlag(1348));
    GotoIf(L2, EventFlag(1349));
    GotoIf(L3, EventFlag(1350));
    if (!EventFlag(1351)) {
        SetCharacterBackreadState(2500790, true);
        EndEvent();
L0:
        SetCharacterBackreadState(2500790, false);
        EndIf(HasMultiplayerState(MultiplayerState.Client));
        ForceAnimationPlayback(2500790, 103021, false, false, false);
        SetDistanceLimitForConversationStateProcessing(2500790, 60);
        EndEvent();
    }
L1:
    SetCharacterBackreadState(2500790, false);
    EndEvent();
L2:
    SetCharacterBackreadState(2500790, false);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetCharacterTeamType(2500790, TeamType.HostileNPC);
    EndEvent();
L3:
    SetCharacterBackreadState(2500790, true);
    ChangeCharacterEnableState(2500790, Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    ForceCharacterTreasure(2500790);
    EndEvent();
});

// Bloodline hunter_talked to state
$Event(12500051, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFixedTimeFrames(10);
    WaitFor(EventFlag(72500357) && EventFlag(1348));
    SetEventFlag(72500357, OFF);
    SetDistanceLimitForConversationStateProcessing(2500790, 17);
    ForceAnimationPlayback(2500790, 103022, false, false, false);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(1351, ON);
    SaveRequest(0);
});

// Bloodline Hunt_Attack count event
$Event(12500052, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(X4_4, OFF);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
});

// Bloodline Hunting_Hostile
$Event(12500053, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor((EventFlag(X8_4) || HPRatio(2500790) <= 0.9) && HPRatio(2500790) != 0);
    SetEventFlag(X8_4, OFF);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(X4_4, ON);
    SaveRequest(0);
});

// Bloodline Hunting_Death
$Event(12500054, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(1340, 1359, OFF);
    SetEventFlag(X4_4, ON);
    SaveRequest(0);
});

// Castle gate_open
$Event(12500070, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, X4_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
});

// Kojo_SC elevator lever_unoperable msg_XX
$Event(12500072, Default, function(X0_4, X4_1) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!AnyBatchEventFlags(12500076, 12500077) && ActionButtonInArea(2500010, X0_4))
            || (EventFlag(12505074) && ActionButtonInArea(2500010, X0_4))
            || (EventFlagState(X4_1, TargetEventFlagType.EventFlag, 12500074) && ActionButtonInArea(2500010, X0_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Old castle_SC elevator_Initialization
$Event(12500075, Default, function() {
    if (EventFlag(12500074)) {
        ReproduceObjectAnimation(2501010, 1);
        WaitFixedTimeSeconds(1);
        SetObjactState(2501011, 2500010, Enabled);
        SetObjactState(2501012, 2500010, Disabled);
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(2501010, 11);
    WaitFixedTimeSeconds(1);
    SetObjactState(2501011, 2500010, Disabled);
    SetObjactState(2501012, 2500010, Enabled);
    EndIf(AnyBatchEventFlags(12500076, 12500077));
    SetObjactState(2501012, 2500010, Disabled);
});

// Old castle_SC elevator_rise
$Event(12500076, Default, function() {
    WaitFor(
        (!EventFlag(12505074) && EventFlag(12500074) && InArea(10000, 2502000))
            || (!EventFlag(12505074) && EventFlag(12500074) && ObjActEventFlag(12500501)));
    SetEventFlag(12505074, ON);
    SetObjactState(2501011, 2500010, Disabled);
    ForceAnimationPlayback(2501010, 10, false, true, false);
    WaitFor(!InArea(10000, 2502001));
    ForceAnimationPlayback(2501010, 11, false, true, false);
    SetEventFlag(12505074, OFF);
    SetEventFlag(12500074, OFF);
    SetObjactState(2501012, 2500010, Enabled);
    RestartEvent();
});

// Old castle_SC elevator_descending
$Event(12500077, Default, function() {
    WaitFor(
        (!EventFlag(12505074) && !EventFlag(12500074) && InArea(10000, 2502001))
            || (!EventFlag(12505074) && !EventFlag(12500074) && ObjActEventFlag(12500501)));
    SetEventFlag(12505074, ON);
    SetObjactState(2501012, 2500010, Disabled);
    ForceAnimationPlayback(2501010, 0, false, true, false);
    WaitFor(!InArea(10000, 2502000));
    ForceAnimationPlayback(2501010, 1, false, true, false);
    SetEventFlag(12505074, OFF);
    SetEventFlag(12500074, ON);
    SetObjactState(2501011, 2500010, Enabled);
    RestartEvent();
});

// Evil spirit of the old castle_Initial appearance flag
$Event(12500078, Default, function() {
    WaitFixedTimeFrames(0);
});

// Blood licker appears_XX
$Event(12505100, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X0_4, X8_4);
        ChangeCharacterPatrolBehavior(X0_4, X12_4);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(InArea(10000, 2502207) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitRandomTimeFrames(30, 45);
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(1);
    SetCharacterHome(X0_4, X8_4);
    ChangeCharacterPatrolBehavior(X0_4, X12_4);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
});

// Parasite_Appearance_XX
$Event(12500100, Default, function(X0_4, X4_4) {
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(EntityInRadiusOfEntity(X0_4, 10000, X4_4));
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    SetCharacterGravity(X0_4, Enabled);
    WaitFixedTimeFrames(14);
    SetCharacterMaphits(X0_4, false);
});

// Church seal initialization
$Event(12500200, Restart, function(X0_4, X4_4) {
    BatchSetEventFlags(X0_4, X4_4, OFF);
});

// Church Seal Grant
$Event(12500206, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(HasDamageType(10000, X0_4, DamageType.Unspecified));
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, ON);
    WaitFor(CharacterDead(X0_4) || !EventFlag(X8_4));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Church seal effect time
$Event(12500220, Default, function(X0_4, X4_4) {
    if (!EventFlag(X4_4)) {
        WaitFor(HasDamageType(10000, X0_4, DamageType.Unspecified));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
    }
    dmg = HasDamageType(10000, X0_4, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(300) || CharacterDead(X0_4));
    if (!dmg.Passed) {
        SetEventFlag(X4_4, OFF);
    }
    RestartEvent();
});

// First encounter with the evil spirit of the old castle
$Event(12500235, Default, function(X0_4, X4_4) {
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(EventFlag(X4_4));
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
});

// Entrance_widow_start
$Event(12500285, Default, function(X0_4, X4_4, X8_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        EntityInRadiusOfEntity(X0_4, 10000, X4_4)
            || CharacterDamagedBy(X0_4, 10000)
            || CharacterAIState(X8_4, AIStateType.Combat));
    SetCharacterAIState(X0_4, Enabled);
});

// Castle wall_larval fruit bat_mimeticism
$Event(12500390, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat) || CharacterAIState(X0_4, AIStateType.Alert));
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
});

// Wandering Madness_Kojo_XX
$Event(12500400, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(X4_4);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Castle wall_larval fruit bat_mimetic_link release
$Event(12500430, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X4_4, 7010, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat) || HasDamageType(X4_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 7012, false, false, false);
});

// Castle wall_larval fruit bat_mimetic_area release
$Event(12500435, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7010, true, false, true);
    area = InArea(10000, X4_4);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
});

// Castle wall_larval flying fox_mimicry_damage removed
$Event(12500440, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    ForceAnimationPlayback(X4_4, 7010, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
            || HasDamageType(X4_4, 10000, DamageType.Unspecified)
            || (CharacterAIState(X0_4, AIStateType.Combat) && EntityInRadiusOfEntity(X0_4, 10000, 8))
            || (CharacterAIState(X4_4, AIStateType.Combat) && EntityInRadiusOfEntity(X4_4, 10000, 8)));
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X4_4, 7011, false, false, false);
});

// A young fruit bat flies away
$Event(12500454, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetCharacterAIId(X0_4, X20_4);
    area = InArea(10000, X12_4);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    GotoIf(S0, dmg.Passed);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    if (X12_4 == 2502021) {
        SetCharacterHome(X0_4, X12_4);
        WaitFixedTimeFrames(X28_4);
    }
    SetCharacterAIId(X0_4, X24_4);
    EndEvent();
    ForceAnimationPlayback(X0_4, X16_4, false, false, false);
S0:
    SetCharacterAIId(X0_4, X24_4);
});

// Young fruit bats fly away_Library balcony only
$Event(12500458, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    SetCharacterMaphits(X0_4, true);
    area = InArea(10000, X8_4);
    WaitFor(area || InArea(10000, X16_4));
    if (!area.Passed) {
        WaitFor(InArea(10000, X8_4) || ElapsedSeconds(10));
    }
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetCharacterHome(X0_4, X8_4);
    WaitFixedTimeFrames(X12_4);
    SetCharacterMaphits(X0_4, false);
});

// Archive_device activation
$Event(12500501, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2501500, 0);
        RegisterLadder(12500996, 12500997, 2501510);
        SetObjactState(2501501, 2500000, Disabled);
        ReproduceObjectAnimation(2501501, 0);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(12500500));
    ForceAnimationPlayback(2501500, 0, false, true, false);
    RegisterLadder(12500996, 12500997, 2501510);
});

// Library Balcony_Surprise attack of young fruit bats
$Event(12500502, Default, function(X0_4, X4_4, X8_4) {
    SetCharacterGravity(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    if (ThisEventSlot()) {
        WaitFor(InArea(10000, X8_4));
        ForceAnimationPlayback(X0_4, 7011, false, false, false);
        WaitFixedTimeFrames(35);
        SetCharacterGravity(X0_4, Enabled);
        EndEvent();
    }
    WaitFor(EventFlag(X4_4) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, 7011, false, false, true);
    WaitFixedTimeFrames(35);
    SetCharacterGravity(X0_4, Enabled);
});

// Archive_King's Servant_Escape to the back
$Event(12500503, Default, function() {
    WaitFor(
        CharacterAIState(2500124, AIStateType.Combat)
            || CharacterAIState(2500241, AIStateType.Combat)
            || CharacterAIState(2500276, AIStateType.Combat));
    SetCharacterAIId(2500124, 233022);
    SetCharacterHome(2500124, 2502411);
    RequestCharacterAICommand(2500124, 10, 0);
    WaitFor(InArea(2500124, 2502411) || ElapsedSeconds(8));
    RequestCharacterAIReplan(2500124);
    RequestCharacterAICommand(2500124, -1, 0);
});

// General purpose_Event animation wait_XX
$Event(12500520, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitRandomTimeFrames(0, 100);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    WaitFor(
        (!CharacterHasSpEffect(10000, 4652) && EntityInRadiusOfEntity(X0_4, 10000, X12_4))
            || (CharacterHasSpEffect(10000, 4652) && EntityInRadiusOfEntity(X0_4, 10000, X16_4))
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// Special standby damage removed
$Event(12500620, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    EndIf(EventFlag(X12_4));
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(dmg || EventFlag(X12_4));
    if (!dmg.Passed) {
        ForceAnimationPlayback(X0_4, X8_4, false, true, true);
        EndEvent();
    }
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X12_4));
    ForceAnimationPlayback(X0_4, 7021, false, true, true);
});

// Servant of the King_Special standby canceled when hostile
$Event(12500630, Restart, function(X0_4, X4_4, X8_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// widow_generate control
$Event(12500640, Default, function(X0_4) {
    WaitFor(!CharacterDead(X0_4));
    WaitFor(CharacterDead(X0_4));
    ClearCharactersAITarget(X0_4);
    RestartEvent();
});

// King's Servant_Cane Strike Dedicated
$Event(12500740, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    RequestCharacterAICommand(X0_4, 100, 0);
});

// Crazy evil spirit appears with SAN value_Kojo_XX
$Event(12504000, Restart, function(X0_4, X4_1, X8_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(
        PlayerInsightAmount() >= X4_1
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
});

// Destroy crazy evil spirits with SAN value_Kojo_XX
$Event(12504005, Restart, function(X0_4, X4_1, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X8_4) && PlayerInsightAmount() <= X4_1);
    }
L0:
    ForceCharacterDeath(X0_4, false);
});

// debug resident effect switching
$Event(101, Default, function() {
    WaitFor(EventFlag(100));
    ActivateMapPart(2506001, Enabled);
    WaitFor(!EventFlag(100));
    ActivateMapPart(2506001, Disabled);
    RestartEvent();
});

// After boss room_castle display control
$Event(12500810, Default, function() {
    if (ThisEvent()) {
        DeactivateObject(2501810, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2506000, Disabled);
    ActivateMapPart(2506001, Disabled);
    ActivateMapPart(2506002, Disabled);
    ActivateMapPart(2506003, Disabled);
    ActivateMapPart(2506004, Disabled);
    ActivateMapPart(2506005, Disabled);
    ActivateMapPart(2506006, Disabled);
    ActivateMapPart(2506007, Disabled);
    ActivateMapPart(2506008, Disabled);
    ActivateMapPart(2506009, Disabled);
    ActivateMapPart(2506010, Disabled);
    ActivateMapPart(2506011, Disabled);
    ActivateMapPart(2506012, Disabled);
    ActivateMapPart(2506013, Disabled);
    ActivateMapPart(2506014, Disabled);
    ActivateMapPart(2506015, Disabled);
    ActivateMapPart(2506016, Disabled);
    ActivateMapPart(2506017, Disabled);
    ActivateMapPart(2506070, Disabled);
    ActivateMapPart(2506071, Disabled);
    ActivateMapPart(2506072, Disabled);
    ActivateMapPart(2506073, Disabled);
    DeactivateObject(2506018, Disabled);
    DeactivateObject(2506019, Disabled);
    DeactivateObject(2506020, Disabled);
    DeactivateObject(2506021, Disabled);
    DeactivateObject(2506022, Disabled);
    DeactivateObject(2506023, Disabled);
    DeactivateObject(2506024, Disabled);
    DeactivateObject(2506025, Disabled);
    DeactivateObject(2506026, Disabled);
    DeactivateObject(2506027, Disabled);
    DeactivateObject(2506028, Disabled);
    DeactivateObject(2506029, Disabled);
    DeactivateObject(2506030, Disabled);
    DeactivateObject(2506031, Disabled);
    DeactivateObject(2506032, Disabled);
    DeactivateObject(2506033, Disabled);
    DeactivateObject(2506034, Disabled);
    DeactivateObject(2506035, Disabled);
    DeactivateObject(2506036, Disabled);
    DeactivateObject(2506039, Disabled);
    DeactivateObject(2506040, Disabled);
    DeactivateObject(2506041, Disabled);
    DeactivateObject(2506042, Disabled);
    DeactivateObject(2506043, Disabled);
    DeactivateObject(2506044, Disabled);
    DeactivateObject(2506045, Disabled);
    DeactivateObject(2506046, Disabled);
    DeactivateObject(2506047, Disabled);
    DeactivateObject(2506048, Disabled);
    DeactivateObject(2506049, Disabled);
    DeactivateObject(2506050, Disabled);
    DeactivateObject(2506051, Disabled);
    DeactivateObject(2506052, Disabled);
    DeactivateObject(2506053, Disabled);
    DeactivateObject(2506054, Disabled);
    DeactivateObject(2506055, Disabled);
    DeactivateObject(2506056, Disabled);
    DeactivateObject(2506057, Disabled);
    DeactivateObject(2506058, Disabled);
    DeactivateObject(2506059, Disabled);
    DeactivateObject(2506060, Disabled);
    DeactivateObject(2506061, Disabled);
    DeactivateObject(2506062, Disabled);
    DeactivateObject(2506063, Disabled);
    DeactivateObject(2506064, Disabled);
    DeactivateObject(2506065, Disabled);
    DeactivateObject(2506066, Disabled);
    DeactivateObject(2506067, Disabled);
    ActivateHit(2506037, Disabled);
    ActivateHit(2506038, Disabled);
    ChangeCharacterEnableState(2500600, Disabled);
    DeleteMapSFX(2503300, false);
    DeleteMapSFX(2503301, false);
    DeleteMapSFX(2503302, false);
    DeleteMapSFX(2503303, false);
    DeleteMapSFX(2503304, false);
    DeleteMapSFX(2503305, false);
    DeleteMapSFX(2503306, false);
    DeleteMapSFX(2503307, false);
    EndIf(EventFlag(logarius_defeat+13));
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12501800)
            && InArea(10000, 2502806)
            && PlayerArmorType(ArmorType.Head, 250000, 250000));
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(25000010, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    ActivateMapPart(2506000, Enabled);
    ActivateMapPart(2506001, Enabled);
    ActivateMapPart(2506002, Enabled);
    ActivateMapPart(2506003, Enabled);
    ActivateMapPart(2506004, Enabled);
    ActivateMapPart(2506005, Enabled);
    ActivateMapPart(2506006, Enabled);
    ActivateMapPart(2506007, Enabled);
    ActivateMapPart(2506008, Enabled);
    ActivateMapPart(2506009, Enabled);
    ActivateMapPart(2506010, Enabled);
    ActivateMapPart(2506011, Enabled);
    ActivateMapPart(2506012, Enabled);
    ActivateMapPart(2506013, Enabled);
    ActivateMapPart(2506014, Enabled);
    ActivateMapPart(2506015, Enabled);
    ActivateMapPart(2506016, Enabled);
    ActivateMapPart(2506017, Enabled);
    ActivateMapPart(2506070, Enabled);
    ActivateMapPart(2506071, Enabled);
    ActivateMapPart(2506072, Enabled);
    ActivateMapPart(2506073, Enabled);
    DeactivateObject(2506018, Enabled);
    DeactivateObject(2506019, Enabled);
    DeactivateObject(2506020, Enabled);
    DeactivateObject(2506021, Enabled);
    DeactivateObject(2506022, Enabled);
    DeactivateObject(2506023, Enabled);
    DeactivateObject(2506024, Enabled);
    DeactivateObject(2506025, Enabled);
    DeactivateObject(2506026, Enabled);
    DeactivateObject(2506027, Enabled);
    DeactivateObject(2506028, Enabled);
    DeactivateObject(2506029, Enabled);
    DeactivateObject(2506030, Enabled);
    DeactivateObject(2506031, Enabled);
    DeactivateObject(2506032, Enabled);
    DeactivateObject(2506033, Enabled);
    DeactivateObject(2506034, Enabled);
    DeactivateObject(2506035, Enabled);
    DeactivateObject(2506036, Enabled);
    DeactivateObject(2506039, Enabled);
    DeactivateObject(2506040, Enabled);
    DeactivateObject(2506041, Enabled);
    DeactivateObject(2506042, Enabled);
    DeactivateObject(2506043, Enabled);
    DeactivateObject(2506044, Enabled);
    DeactivateObject(2506045, Enabled);
    DeactivateObject(2506046, Enabled);
    DeactivateObject(2506047, Enabled);
    DeactivateObject(2506048, Enabled);
    DeactivateObject(2506049, Enabled);
    DeactivateObject(2506050, Enabled);
    DeactivateObject(2506051, Enabled);
    DeactivateObject(2506052, Enabled);
    DeactivateObject(2506053, Enabled);
    DeactivateObject(2506054, Enabled);
    DeactivateObject(2506055, Enabled);
    DeactivateObject(2506056, Enabled);
    DeactivateObject(2506057, Enabled);
    DeactivateObject(2506058, Enabled);
    DeactivateObject(2506059, Enabled);
    DeactivateObject(2506060, Enabled);
    DeactivateObject(2506061, Enabled);
    DeactivateObject(2506062, Enabled);
    DeactivateObject(2506063, Enabled);
    DeactivateObject(2506064, Enabled);
    DeactivateObject(2506065, Enabled);
    DeactivateObject(2506066, Enabled);
    DeactivateObject(2506067, Enabled);
    ActivateHit(2506037, Enabled);
    ActivateHit(2506038, Enabled);
    ChangeCharacterEnableState(2500600, Enabled);
    DeactivateObject(2501810, Disabled);
    SpawnMapSFX(2503300);
    SpawnMapSFX(2503301);
    SpawnMapSFX(2503302);
    SpawnMapSFX(2503303);
    SpawnMapSFX(2503304);
    SpawnMapSFX(2503305);
    SpawnMapSFX(2503306);
    SpawnMapSFX(2503307);
});

// Boss Defeat_King's Grim Reaper
$Event(12501800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2503802, Disabled);
        SetMapSoundState(2503803, Disabled);
        ChangeCharacterEnableState(2500800, Disabled);
        ChangeCharacterEnableState(2500801, Disabled);
        ChangeCharacterEnableState(2500802, Disabled);
        ForceCharacterDeath(2500800, false);
        ForceCharacterDeath(2500801, false);
        ForceCharacterDeath(2500802, false);
        DeactivateObject(2501800, Disabled);
        DeleteMapSFX(2503800, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2500800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2501800, Disabled);
    DeleteMapSFX(2503800, true);
    SetLockcamSlotNumber(25, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2500800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(26);
        SetEventFlag(2500, ON);
        SetEventFlag(9460, ON);
        EndTimeMeasurement(2500000);
        EndTimeMeasurement(2500001);
        EndTimeMeasurement(2500010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(logarius_defeat+13)) {
            InitializeEvent(logarius_offset, 7800, logarius_lamp_id+1000, 825000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE play_King's Grim Reaper
$Event(12501801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    flag = EventFlag(12501800);
    WaitFor(flag || (!CharacterBackreadStatus(2500800) && HPRatio(2500800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2502800, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_First battle_King's Grim Reaper
$Event(12501802, Default, function() {
    EndIf(EventFlag(12501800));
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(2500800, 7000, false, false, false);
    }
    WaitFor(
        !EventFlag(12501800) && !ThisEventSlot() && CharacterType(10000, TargetType.Alive) && InArea(10000, 2502805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12504223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!EventFlag(logarius_defeat+13) || EventFlag(12100866)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            PlayCutsceneToPlayer(25000020, CutscenePlayMode.Skippable, 10000);
        } else {
            PlayCutsceneToPlayer(25000020, CutscenePlayMode.Unskippable, 10000);
        }
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(12504800, ON);
    EndIf(EventFlag(9341));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9341, ON);
});

// After defeating the boss, the old castle boss_head appears.
$Event(12501803, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12501800));
    CreateObjectfollowingSFX(2500850, 200, 900201);
    WaitFor(ActionButtonInArea(2500030, 2500850));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2502000);
    DeleteObjectfollowingSFX(2500850, true);
});

// King's Grim Reaper_Measures for guests entering at different times
$Event(12501804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12504800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12504800, ON);
    SetEventFlag(12501802, ON);
});

// Queen's Room_Anonymous Invitation
$Event(12500600, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12500810));
    CreateObjectfollowingSFX(2500851, 200, 900201);
    WaitFor(ActionButtonInArea(2500040, 2500851));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2500910);
    DeleteObjectfollowingSFX(2500851, true);
});

// Host enters boss room_Rematch_King's Grim Reaper
$Event(12504810, Default, function() {
    EndIf(EventFlag(12501800));
    if (!EventFlag(12501802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2501800, Disabled);
            DeleteMapSFX(2503800, false);
        }
        WaitFor(!EventFlag(12501800) && EventFlag(12501802));
        DeactivateObject(2501800, Enabled);
        SpawnMapSFX(2503800);
    }
L0:
    IssueShortWarpRequest(2500800, TargetEntityType.Area, 2502807, -1);
    ForceAnimationPlayback(2500800, 0, false, false, false);
    flag = !EventFlag(12501800);
    chrAct = CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2500800, 2501800);
    flag2 = EventFlag(12501800);
    WaitFor(chrAct || flag2);
    EndIf(flag2.Passed);
    RotateCharacter(10000, 2502800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2502801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12504800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_King's Grim Reaper
$Event(12504811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(
        !EventFlag(12501800)
            && EventFlag(12501802)
            && EventFlag(12504800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2500800, 2501800));
    RotateCharacter(10000, 2502500, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2502801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12504801, ON);
    }
    RestartEvent();
});

// Invalid for fog walls in other people's world_King's Grim Reaper
$Event(12504812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2501800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_King's Grim Reaper
$Event(12504813, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !EntityInRadiusOfEntity(10000, 2501800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// The boss begins to move_King's Grim Reaper
$Event(12504802, Default, function() {
    EndIf(EventFlag(12501800));
    SetCharacterAIState(2500800, Disabled);
    SetCharacterAIState(2500801, Disabled);
    SetCharacterHPBarDisplay(2500800, Disabled);
    SetCharacterHPBarDisplay(2500801, Disabled);
    SetCharacterImmortality(2500801, Enabled);
    ChangeCharacterEnableState(2500801, Disabled);
    CreateBulletOwner(2500802);
    ChangeCharacterEnableState(2500802, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12504800) || EventFlag(logarius_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12504223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2500800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2500801, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12504223, ON);
    SetEventFlag(12504800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2500800, 7500, true);
    SetSpEffect(2500801, 7500, true);
    SetSpEffect(2500802, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500802);
    Goto(L4);
L3:
    SetSpEffect(2500800, 7501, true);
    SetSpEffect(2500801, 7501, true);
    SetSpEffect(2500802, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500801);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2500802);
    Goto(L4);
L4:
    SetCharacterAIState(2500800, Enabled);
    DisplayBossHealthBar(Enabled, 2500800, 0, 232000);
    CreatePlaylog(82);
    StartTimeMeasurement(2500010, 98, Enabled);
});

// Boss BGM ON_King's Grim Reaper
$Event(12504803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    if (!ThisEvent()) {
        SetMapSoundState(2503802, Disabled);
        SetMapSoundState(2503803, Disabled);
        flagArea &= !EventFlag(12501800) && EventFlag(12504802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12504801);
        }
        flagArea &= InArea(10000, 2502802);
        WaitFor(flagArea);
        EnableBossMapSound(2503802, Enabled);
        spFlagArea &= CharacterHasSpEffect(2500800, 5633);
    }
L0:
    spFlagArea &= !EventFlag(12501800) && EventFlag(12504802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        spFlagArea &= EventFlag(12504801);
    }
    spFlagArea &= InArea(10000, 2502802);
    WaitFor(spFlagArea);
    EnableBossMapSound(2503802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2503803, Enabled);
});

// Boss Camera_King's Grim Reaper
$Event(12504804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasEventMessage(2500800, 100));
    SetLockcamSlotNumber(25, 0, 1);
    WaitFor(CharacterHasSpEffect(2500801, 5610));
    SetLockcamSlotNumber(25, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_King's Grim Reaper
$Event(12504805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(EventFlag(12501800));
    EnableBossMapSound(2503802, Disabled);
    EnableBossMapSound(2503803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Great Magic
$Event(12504806, Default, function() {
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasEventMessage(2500800, 100));
    RequestCharacterAICommand(2500800, 1, 0);
    RequestCharacterAIReplan(2500800);
    StartTimeMeasurement(2501000, 116, Enabled);
    WarpCharacterAndCopyFloor(2500801, TargetEntityType.Character, 2500800, 100, 2500800);
    ChangeCharacterEnableState(2500801, Enabled);
    WaitFixedTimeSeconds(1);
    SetCharacterAIState(2500801, Enabled);
    WaitFor(HasDamageType(2500801, -1, DamageType.Unspecified) || ElapsedSeconds(60) || CharacterDead(2500800));
    RequestCharacterAICommand(2500800, -1, 0);
    RequestCharacterAIReplan(2500800);
    EndTimeMeasurement(2501000);
    SpawnOneshotSFX(TargetEntityType.Character, 2500801, 100, 623206);
    SetSpEffect(2500801, 5610, false);
    ChangeCharacterEnableState(2500801, Disabled);
    SetCharacterAIState(2500801, Disabled);
    RestartEvent();
});

// Force activated when enraged
$Event(12504807, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasSpEffect(2500800, 5633));
    ShootBullet(2500802, 2500800, 6, 223200590, 0, 0, 0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// SA break
$Event(12504808, Default, function() {
    EndIf(EventFlag(12501800));
    WaitFor(CharacterHasSpEffect(2500800, 5633) && CharacterHasEventMessage(2500800, 10));
    ClearSpEffect(2500800, 5633);
    ClearSpEffect(2500800, 5599);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2500800, 2100, false, true, false);
    RestartEvent();
});

// The appearance flag of the evil spirit of the old castle in the guest room
$Event(12500896, Default, function(X0_4) {
    if (ThisEvent()) {
        DeleteMapSFX(2503200, false);
        DeleteMapSFX(2503201, false);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, X0_4));
    DeleteMapSFX(2503200, true);
    DeleteMapSFX(2503201, true);
    WaitFixedTimeFrames(10);
});

// Appearance flag of the evil spirit of the old castle at the entrance
$Event(12500898, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4));
    WaitFixedTimeFrames(10);
    SetEventFlag(12500898, ON);
    if (EventFlag(X0_4)) {
        CreatePlaylog(146);
    }
    if (EventFlag(X4_4)) {
        CreatePlaylog(180);
    }
    if (EventFlag(X8_4)) {
        CreatePlaylog(214);
    }
    if (EventFlag(X12_4)) {
        CreatePlaylog(248);
    }
});

// Evil spirits in the old castle_materialization control
$Event(12500900, Default, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X4_4)) {
        SetCharacterAIState(X0_4, Disabled);
        SetCharacterAnimationState(X0_4, Disabled);
        SetSpEffectAndUnknown200455(X0_4, 5686, false);
        ClearSpEffect(X0_4, 5684);
        WaitFor(EventFlag(X4_4));
        WaitRandomTimeFrames(10, 70);
        SetCharacterAIState(X0_4, Enabled);
        ClearSpEffect(X0_4, 5686);
        SetSpEffect(X0_4, 5684, false);
    }
L0:
    SetSpEffectAndUnknown200455(X0_4, 5685, false);
    SetCharacterAnimationState(X0_4, Disabled);
    WaitFor(EventFlag(X8_4));
    ClearSpEffect(X0_4, 5685);
    SetCharacterAnimationState(X0_4, Enabled);
    WaitFor(!EventFlag(X8_4));
    RestartEvent();
});

// Church Seal_Old Castle Evil Spirit Berserk Parameter Replacement
$Event(12501000, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 4652));
    SetCharacterAIId(X0_4, 215001);
    WaitFor(!CharacterHasSpEffect(10000, 4652));
    SetCharacterAIId(X0_4, 215001);
    RestartEvent();
});

// Evil spirit of the old castle_materialization control flag operation_XX
$Event(12505000, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeFrames(3);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Evil spirit of the old castle_materialization control flag synchronization_XX
$Event(12505300, Restart, function(X0_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Map first entry_play log
$Event(12500090, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2503500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 282, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 282, PlayLogMultiplayerType.HostOnly);
    InitializeEvent(0, 9350, 2);
});

// Warp Chair_Warp Anime Play_XX
$Event(12507010, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X4_4, 200);
    ForceAnimationPlayback(10000, 101160, false, false, true);
    WaitFixedTimeSeconds(4);
    SetEventFlag(X0_4, OFF);
});

// Warp Chair_Warp_XX
$Event(12507020, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    WarpPlayerToRespawnPoint(X4_4);
    SetEventFlag(X8_4, ON);
});

// Warp chair_warp post-processing
$Event(12507040, Default, function() {
    if (!AnyBatchEventFlags(9001, 9010)) {
        EndEvent();
    }
    SetEventFlag(9210, ON);
    WaitFor(!EventFlag(9210));
    if (EventFlag(9001)) {
        SetEventFlag(12507811, ON);
        SetEventFlag(12507810, ON);
        SetPlayerRespawnPoint(2502950);
    }
    if (EventFlag(9002)) {
        SetEventFlag(12507831, ON);
        SetEventFlag(12507830, ON);
        SetPlayerRespawnPoint(2502951);
    }
    if (EventFlag(9003)) {
        SetEventFlag(12507851, ON);
        SetEventFlag(12507850, ON);
        SetPlayerRespawnPoint(2502952);
    }
    if (EventFlag(9004)) {
        SetEventFlag(12507871, ON);
        SetEventFlag(12507870, ON);
        SetPlayerRespawnPoint(2502953);
    }
    if (EventFlag(9005)) {
        SetEventFlag(12507891, ON);
        SetEventFlag(12507890, ON);
        SetPlayerRespawnPoint(2502954);
    }
    if (EventFlag(9006)) {
        SetEventFlag(12507911, ON);
        SetEventFlag(12507910, ON);
        SetPlayerRespawnPoint(2502955);
    }
    if (EventFlag(9007)) {
        SetEventFlag(12507931, ON);
        SetEventFlag(12507930, ON);
        SetPlayerRespawnPoint(2502956);
    }
    if (EventFlag(9008)) {
        SetEventFlag(12507951, ON);
        SetEventFlag(12507950, ON);
        SetPlayerRespawnPoint(2502957);
    }
    if (EventFlag(9009)) {
        SetEventFlag(12507971, ON);
        SetEventFlag(12507970, ON);
        SetPlayerRespawnPoint(2502958);
    }
    if (EventFlag(9010)) {
        SetEventFlag(12507991, ON);
        SetEventFlag(12507990, ON);
        SetPlayerRespawnPoint(2502959);
    }
    BatchSetEventFlags(9000, 9010, OFF);
});

// Warp chair_first activation effect_XX
$Event(12507050, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(CharacterBackreadStatus(X4_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    ForceAnimationPlayback(X4_4, 101165, true, false, false);
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 250);
    WaitFor(EventFlag(X0_4));
    ForceAnimationPlayback(X4_4, 101166, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});
