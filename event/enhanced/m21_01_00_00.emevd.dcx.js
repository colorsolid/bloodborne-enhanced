// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "PC情報_現実拠点到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [26]
// @version    3.4.1
// ==/EMEVD==

const lamp_offset = 52;
const lamp_id = 2111950;

// constructor
$Event(0, Default, function() {
    InitializeEvent(lamp_offset, 8300, lamp_id+2000, lamp_id+3000, lamp_id+4000, 21, 1, -1, lamp_id+6000);
    InitializeEvent(lamp_offset, 8500, 8500+lamp_offset, lamp_id, 72112525);
    
    InitializeEvent(2500, 12107000, 72112500, 2111950, 2412950);
    InitializeEvent(2501, 12107000, 72112501, 2111950, 2412951);
    InitializeEvent(2502, 12107000, 72112502, 2111950, 2412952);
    InitializeEvent(2503, 12107000, 72112503, 2111950, 2412953);
    InitializeEvent(2504, 12107000, 72112504, 2111950, 2402950);
    InitializeEvent(2505, 12107000, 72112505, 2111950, 2402951);
    InitializeEvent(2506, 12107000, 72112506, 2111950, 2422950);
    InitializeEvent(2507, 12107000, 72112507, 2111950, 2422952);
    InitializeEvent(2508, 12107000, 72112508, 2111950, 2422951);
    InitializeEvent(2509, 12107000, 72112509, 2111950, 2302950);
    InitializeEvent(2510, 12107000, 72112510, 2111950, 2302951);
    InitializeEvent(2511, 12107000, 72112511, 2111950, 2302952);
    InitializeEvent(2512, 12107000, 72112512, 2111950, 2202950);
    InitializeEvent(2513, 12107000, 72112513, 2111950, 2202951);
    InitializeEvent(2514, 12107000, 72112514, 2111950, 2702950);
    InitializeEvent(2515, 12107000, 72112515, 2111950, 2702951);
    InitializeEvent(2516, 12107000, 72112516, 2111950, 3202950);
    InitializeEvent(2517, 12107000, 72112517, 2111950, 3202952);
    InitializeEvent(2518, 12107000, 72112518, 2111950, 2802950);
    InitializeEvent(2519, 12107000, 72112519, 2111950, 2802953);
    InitializeEvent(2520, 12107000, 72112520, 2111950, 2802951);
    InitializeEvent(2521, 12107000, 72112521, 2111950, 2802952);
    InitializeEvent(2522, 12107000, 72112522, 2111950, 2502950);
    InitializeEvent(2523, 12107000, 72112523, 2111950, 2502952);
    InitializeEvent(2524, 12107000, 72112524, 2111950, 2502951);
    InitializeEvent(2525, 12107000, 72112525, 2111950, 2112950);
    InitializeEvent(2526, 12107000, 72112526, 2111950, 3202951);
    InitializeEvent(2527, 12107000, 72112527, 2111950, 3202953);
    InitializeEvent(2528, 12107000, 72112528, 2111950, 3302950);
    InitializeEvent(2529, 12107000, 72112529, 2111950, 3302951);
    InitializeEvent(2530, 12107000, 72112530, 2111950, 2602950);
    InitializeEvent(2531, 12107000, 72112531, 2111950, 2602953);
    InitializeEvent(2532, 12107000, 72112532, 2111950, 2602952);
    InitializeEvent(2533, 12107000, 72112533, 2111950, 2602951);
    InitializeEvent(2534, 12107000, 72112534, 2111950, 3402950);
    InitializeEvent(2535, 12107000, 72112535, 2111950, 3402951);
    InitializeEvent(2536, 12107000, 72112536, 2111950, 3402953);
    InitializeEvent(2537, 12107000, 72112537, 2111950, 3402952);
    InitializeEvent(2538, 12107000, 72112538, 2111950, 3502950);
    InitializeEvent(2539, 12107000, 72112539, 2111950, 3502951);
    InitializeEvent(2540, 12107000, 72112540, 2111950, 3502952);
    InitializeEvent(2541, 12107000, 72112541, 2111950, 3602950);
    InitializeEvent(2542, 12107000, 72112542, 2111950, 3602951);
    InitializeEvent(2543, 12107000, 72112543, 2111950, 3602952);
    InitializeEvent(2544, 12107000, 72112544, 2111950, 2902950);
    InitializeEvent(2545, 12107000, 72112545, 2111950, 2902951);
    InitializeEvent(2546, 12107000, 72112546, 2111950, 2902952);
    InitializeEvent(2547, 12107000, 72112547, 2111950, 2902953);
    InitializeEvent(2548, 12107000, 72112548, 2111950, 2902954);
    InitializeEvent(2549, 12107000, 72112549, 2111950, 2902955);
    InitializeEvent(2550, 12107000, 72112550, 2111950, 2902956);
    InitializeEvent(2551, 12107000, 72112551, 2111950, 2902957);
    InitializeEvent(2552, 12107000, 72112552, 2111950, 2902958);
    InitializeEvent(2553, 12107000, 72112553, 2111950, 2902959);
    
    SetEventFlag(72110025, OFF);
    SetEventFlag(72110125, OFF);
    SetEventFlag(72110225, OFF);
    SetEventFlag(72110325, OFF);
    SetEventFlag(72110425, OFF);
    SetEventFlag(72110525, OFF);
    SetEventFlag(72110625, OFF);
    SetEventFlag(72110725, OFF);
    SetEventFlag(72110825, OFF);
    SetEventFlag(72110925, OFF);
    SetEventFlag(72111025, OFF);
    SetEventFlag(72111125, OFF);
    SetEventFlag(72111225, OFF);
    SetEventFlag(72111325, OFF);
    SetEventFlag(72111425, OFF);
    SetEventFlag(72111525, OFF);
    SetEventFlag(72111625, OFF);
    SetEventFlag(72111725, OFF);
    SetEventFlag(72111825, OFF);
    SetEventFlag(72111925, OFF);
    SetEventFlag(72112025, OFF);
    SetEventFlag(72112125, OFF);
    SetEventFlag(72112225, OFF);
    SetEventFlag(72112325, OFF);
    SetEventFlag(72112425, OFF);
    SetEventFlag(72112525, OFF);
    SetEventFlag(72112625, OFF);
    SetEventFlag(72112725, OFF);
    SetEventFlag(72112825, OFF);
    SetEventFlag(72112925, OFF);
    SetEventFlag(72113025, OFF);
    SetEventFlag(72113125, OFF);
    SetEventFlag(72113225, OFF);
    SetEventFlag(72113325, OFF);
    SetEventFlag(72113425, OFF);
    SetEventFlag(72113525, OFF);
    SetEventFlag(72113625, OFF);
    SetEventFlag(72113725, OFF);
    SetEventFlag(72113825, OFF);
    SetEventFlag(72113925, OFF);
    SetEventFlag(72114025, OFF);
    SetEventFlag(72114125, OFF);
    SetEventFlag(72114225, OFF);
    SetEventFlag(72114325, OFF);
    SetEventFlag(72114425, OFF);
    SetEventFlag(72114525, OFF);
    SetEventFlag(72114625, OFF);
    SetEventFlag(72114725, OFF);
    SetEventFlag(72114825, OFF);
    SetEventFlag(72114925, OFF);
    SetEventFlag(72115025, OFF);
    SetEventFlag(72115125, OFF);
    SetEventFlag(72115225, OFF);
    SetEventFlag(72115325, OFF);

    InitializeEvent(0, 12107100, 72100421, 2111950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2111950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2111950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2111950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2111950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2111950, 9026);

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
    
    InitializeEvent(0, 12110200, 2111000, 12110000);
    InitializeEvent(0, 12110990, 0);
    InitializeEvent(0, 12110400, 0);
    InitializeEvent(0, 12110100, 0);
    InitializeEvent(0, 12110300, 0);
    InitializeEvent(0, 12110301, 0);
    InitializeEvent(0, 12110302, 0);
    InitializeEvent(52, 7000, 2110950, 2111950, 999, 12117800, -1);
    InitializeEvent(52, 7100, 72110200, 2111950);
    InitializeEvent(52, 7200, 72110100, 2111950, 2102952);
    InitializeEvent(52, 7300, 72102110, 2111950);
    InitializeEvent(52, 12102220, 2111950, 2110950);
});

// pre-constructor
$Event(50, Default, function() {
    SetCharacterHPBarDisplay(2110700, Disabled);
    SetCharacterGravity(2110700, Disabled);
    SetCharacterMaphits(2110700, true);
});

// heroine doll_examine
$Event(12110100, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(2110000, 2110700));
    DisplayGenericDialog(10010190, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// treasure chest_XX
$Event(12110200, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// Examine the shelf
$Event(12110300, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111100, 200, 900201);
    WaitFor(ActionButtonInArea(2110010, 2111100));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110800);
    DeleteObjectfollowingSFX(2111100, true);
});

// Examine the altar
$Event(12110301, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111101, 200, 900201);
    WaitFor(ActionButtonInArea(2110011, 2111101));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110810);
    DeleteObjectfollowingSFX(2111101, true);
});

// Examine the grave
$Event(12110302, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    CreateObjectfollowingSFX(2111102, 200, 900201);
    WaitFor(ActionButtonInArea(2110012, 2111102));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2110000);
    DeleteObjectfollowingSFX(2111102, true);
});

// time zone change
$Event(12110400, Default, function() {
    if (EventFlag(12100856)) {
        BatchSetEventFlags(12115000, 12115002, OFF);
        RandomlySetEventFlagInRange(12115000, 12115002, ON);
        WaitFixedTimeFrames(1);
        GotoIf(L0, EventFlag(12115000));
        GotoIf(L1, EventFlag(12115001));
        GotoIf(L2, EventFlag(12115002));
    }
    if (!EventFlag(9802)) {
        if (!EventFlag(9801)) {
            if (!EventFlag(9800)) {
            }
L2:
            ActivateMapPart(2114002, Enabled);
            ActivateMapPart(2114000, Disabled);
            ActivateMapPart(2114001, Disabled);
            EndEvent();
        }
L1:
        ActivateMapPart(2114002, Disabled);
        ActivateMapPart(2114000, Enabled);
        ActivateMapPart(2114001, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2114002, Disabled);
    ActivateMapPart(2114000, Disabled);
    ActivateMapPart(2114001, Enabled);
    EndEvent();
});

// Map first entry_play log
$Event(12110990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2113500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 0, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 0, PlayLogMultiplayerType.HostOnly);
    InitializeEvent(0, 9350, 2);
    AwardAchievement(12);
});
