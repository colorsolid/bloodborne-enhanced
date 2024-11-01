// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_邪神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000ギミック_エレベーター起動\u0000PC情報_故郷到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000"
// @linked    [162]
// @version    3.4.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    InitializeEvent(50, 7000, 3300950, 3301950, 999, 13307800);
    InitializeEvent(51, 7000, 3300951, 3301951, 13301800, 13307820);
    InitializeEvent(50, 7100, 73300200, 3301950);
    InitializeEvent(51, 7100, 73300201, 3301951);
    InitializeEvent(50, 7200, 73300100, 3301950, 2102953);
    InitializeEvent(51, 7200, 73300101, 3301951, 2102953);
    InitializeEvent(50, 7300, 72103300, 3301950);
    InitializeEvent(51, 7300, 72103301, 3301951);
    InitializeEvent(10, 9200, 3303900);
    SetMapSoundState(3304000, Disabled);
    SetMapSoundState(3304001, Disabled);
    StartTimeMeasurement(3300000, 0, Disabled);
    StartTimeMeasurement(3300001, 18, Enabled);
    InitializeEvent(0, 13300990, 0);
    CreateObjectfollowingSFX(3301020, 100, 8028);
    CreateObjectfollowingSFX(3301022, 100, 8028);
    CreateObjectfollowingSFX(3301023, 100, 8028);
    CreateObjectfollowingSFX(3301024, 100, 8028);
    CreateObjectfollowingSFX(3301025, 100, 8028);
    ForceAnimationPlayback(3301020, 200, true, false, false);
    ForceAnimationPlayback(3301022, 200, true, false, false);
    ForceAnimationPlayback(3301023, 200, true, false, false);
    ForceAnimationPlayback(3301024, 200, true, false, false);
    ForceAnimationPlayback(3301025, 200, true, false, false);
    InitializeEvent(0, 13304872, 0);
    InitializeEvent(0, 13304873, 0);
    InitializeEvent(0, 13301800, 0);
    InitializeEvent(0, 13301801, 0);
    InitializeEvent(0, 13301802, 0);
    InitializeEvent(0, 13304870, 0);
    InitializeEvent(0, 13304871, 0);
    InitializeEvent(0, 13304802, 0);
    InitializeEvent(1, 13304803, 0);
    InitializeEvent(0, 13304804, 0);
    InitializeEvent(0, 13304805, 0);
    InitializeEvent(0, 13304807, 0);
    InitializeEvent(0, 13304808, 0);
    InitializeEvent(0, 13301803, 0);
    InitializeEvent(0, 13304820, 3311, 3311, 218693645);
    InitializeEvent(1, 13304820, 3322, 3322, 235405326);
    InitializeEvent(0, 13304830, 3301, 3301, 4, 482, 200, 8020, 1065353216, 1069547520);
    InitializeEvent(1, 13304830, 3302, 3302, 6, 482, 180, 8020, 1065353216, 1069547520);
    InitializeEvent(2, 13304830, 3303, 3303, 8, 482, 150, 8020, 1065353216, 1069547520);
    InitializeEvent(3, 13304830, 3304, 3304, 5, 481, 200, 8010, 1065353216, 1069547520);
    InitializeEvent(4, 13304830, 3305, 3305, 7, 481, 150, 8010, 1065353216, 1069547520);
    InitializeEvent(5, 13304830, 3306, 3306, 9, 481, 120, 8010, 1065353216, 1069547520);
    InitializeEvent(6, 13304830, 3307, 3307, 10, 481, 120, 8010, 1065353216, 1069547520);
    InitializeEvent(7, 13304830, 3308, 3308, 3, 483, 200, 8030, 1045220557, 1050253722);
    InitializeEvent(8, 13304830, 3309, 3309, 11, 484, 100, 8040, 1045220557, 1050253722);
    InitializeEvent(9, 13304830, 3310, 3310, 12, 483, 100, 8030, 1045220557, 1050253722);
    InitializeEvent(0, 13304840, 0);
    InitializeEvent(0, 13300100, 0);
    InitializeEvent(0, 13300110, 0);
    InitializeEvent(0, 13300111, 0);
    InitializeEvent(0, 13300112, 0);
    InitializeEvent(0, 13300113, 0);
    InitializeEvent(0, 13300120, 0);
    InitializeEvent(0, 13300130, 3300551, 53300990);
    InitializeEvent(1, 13300130, 3300590, 53300980);
    InitializeEvent(2, 13300130, 3300591, 53300970);
    InitializeEvent(3, 13300130, 3300555, 53300960);
    InitializeEvent(4, 13300130, 3300558, 53300940);
    InitializeEvent(5, 13300130, 3300560, 53300930);
    InitializeEvent(6, 13300130, 3300561, 53300920);
    InitializeEvent(7, 13300130, 3300562, 53300910);
    InitializeEvent(8, 13300130, 3300565, 53300890);
    InitializeEvent(9, 13300130, 3300569, 53300870);
    InitializeEvent(10, 13300130, 3300573, 53300850);
    InitializeEvent(11, 13300130, 3300575, 53300830);
    InitializeEvent(12, 13300130, 3300576, 53300820);
    InitializeEvent(13, 13300130, 3300578, 53300800);
    InitializeEvent(14, 13300130, 3300581, 53300790);
    InitializeEvent(15, 13300130, 3300582, 53300780);
    InitializeEvent(16, 13300130, 3300583, 53300770);
    InitializeEvent(17, 13300130, 3300587, 53300750);
    InitializeEvent(18, 13300130, 3300588, 53300740);
    InitializeEvent(19, 13300130, 3300589, 53300730);
    InitializeEvent(20, 13300130, 3300593, 53300700);
    InitializeEvent(21, 13300130, 3300250, 53300690);
    InitializeEvent(22, 13300130, 3300251, 53300680);
    InitializeEvent(23, 13300130, 3300252, 53300670);
    InitializeEvent(24, 13300130, 3300253, 53300660);
    InitializeEvent(25, 13300130, 3300254, 53300650);
    InitializeEvent(26, 13300130, 3300257, 53300640);
    InitializeEvent(27, 13300130, 3300258, 53300630);
    InitializeEvent(28, 13300130, 3300259, 53300620);
    InitializeEvent(29, 13300130, 3300261, 53300610);
    InitializeEvent(30, 13300130, 3300262, 53300600);
    InitializeEvent(0, 13300200, 0);
    InitializeEvent(0, 13300210, 0);
    InitializeEvent(0, 13300220, 3300721);
    InitializeEvent(1, 13300220, 3300722);
    InitializeEvent(0, 13305150, 3300411, 3302205, 1084227584, 0);
    InitializeEvent(1, 13305150, 3300412, 3302205, 1084227584, 0);
    InitializeEvent(2, 13305150, 3300452, 3302205, 1084227584, 0);
    InitializeEvent(3, 13305150, 3300459, 3302205, 1084227584, 0);
    InitializeEvent(4, 13305150, 3300500, 3302206, 1097859072, 0);
    InitializeEvent(5, 13305150, 3300502, 3302207, 1073741824, 450);
    InitializeEvent(6, 13305150, 3300413, 3302210, 1084227584, 0);
    InitializeEvent(7, 13305150, 3300460, 3302210, 1084227584, 0);
    InitializeEvent(8, 13305150, 3300413, 3302211, 1084227584, 0);
    InitializeEvent(9, 13305150, 3300460, 3302211, 1084227584, 0);
    InitializeEvent(0, 13305210, 3300102, 1073741824, 7000, 7001, 0, 218300);
    InitializeEvent(1, 13305210, 3300103, 1073741824, 7000, 7001, 0, 218300);
    InitializeEvent(2, 13305210, 3300104, 1073741824, 7000, 7001, 0, 218300);
    InitializeEvent(0, 13305220, 0);
    InitializeEvent(0, 13305230, 0);
    InitializeEvent(1, 13305200, 3300459, 3302301, 3300461, 1084227584, 3306001);
    InitializeEvent(2, 13305200, 3300452, 3302302, 3300460, 1084227584, 3306002);
    InitializeEvent(0, 13305250, 3300584, 3302410, 13305255);
    InitializeEvent(1, 13305250, 3300593, 3302411, 13305256);
    InitializeEvent(0, 13305255, 3300584, 3302410);
    InitializeEvent(1, 13305255, 3300593, 3302411);
    InitializeEvent(0, 13305030, 3300500, 3300520);
    InitializeEvent(1, 13305030, 3300501, 3300521);
    InitializeEvent(2, 13305030, 3300502, 3300522);
    InitializeEvent(0, 13305040, 0);
    InitializeEvent(0, 13305041, 0);
    InitializeEvent(0, 13300700, 0);
    InitializeEvent(0, 13304700, 3300700, 13304701, 13304711, 3300, 13301700);
    InitializeEvent(0, 13304710, 3300700, 13304701, 13304711, 13304721);
    InitializeEvent(0, 13304720, 3300700, 13304701, 13304711, 13304721);
    InitializeEvent(0, 13304730, 3300700, 13304701, 13304711, 3300, 13304800, 13301700);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6327)) {
            SetEventFlag(13301999, ON);
        }
    }
    if (!EventFlag(13301999)) {
        DeactivateObject(3301500, Enabled);
        DeactivateObject(3301501, Disabled);
        SetObjectTreasureState(3301500, Enabled);
        SetObjectTreasureState(3301501, Disabled);
    } else {
        DeactivateObject(3301500, Disabled);
        DeactivateObject(3301501, Enabled);
        SetObjectTreasureState(3301500, Disabled);
        SetObjectTreasureState(3301501, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6328)) {
            SetEventFlag(13301998, ON);
        }
    }
    if (!EventFlag(13301998)) {
        DeactivateObject(3301502, Enabled);
        DeactivateObject(3301503, Disabled);
        SetObjectTreasureState(3301502, Enabled);
        SetObjectTreasureState(3301503, Disabled);
    } else {
        DeactivateObject(3301502, Disabled);
        DeactivateObject(3301503, Enabled);
        SetObjectTreasureState(3301502, Disabled);
        SetObjectTreasureState(3301503, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6329)) {
            SetEventFlag(13301997, ON);
        }
    }
    if (!EventFlag(13301997)) {
        DeactivateObject(3301504, Enabled);
        DeactivateObject(3301505, Disabled);
        SetObjectTreasureState(3301504, Enabled);
        SetObjectTreasureState(3301505, Disabled);
    } else {
        DeactivateObject(3301504, Disabled);
        DeactivateObject(3301505, Enabled);
        SetObjectTreasureState(3301504, Disabled);
        SetObjectTreasureState(3301505, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6330)) {
            SetEventFlag(13301996, ON);
        }
    }
    if (!EventFlag(13301996)) {
        DeactivateObject(3301506, Enabled);
        DeactivateObject(3301507, Disabled);
        SetObjectTreasureState(3301506, Enabled);
        SetObjectTreasureState(3301507, Disabled);
    } else {
        DeactivateObject(3301506, Disabled);
        DeactivateObject(3301507, Enabled);
        SetObjectTreasureState(3301506, Disabled);
        SetObjectTreasureState(3301507, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6331)) {
            SetEventFlag(13301995, ON);
        }
    }
    if (!EventFlag(13301995)) {
        DeactivateObject(3301508, Enabled);
        DeactivateObject(3301509, Disabled);
        SetObjectTreasureState(3301508, Enabled);
        SetObjectTreasureState(3301509, Disabled);
    } else {
        DeactivateObject(3301508, Disabled);
        DeactivateObject(3301509, Enabled);
        SetObjectTreasureState(3301508, Disabled);
        SetObjectTreasureState(3301509, Enabled);
    }
});

// プリコンストラクタ
$Event(50, Default, function() {
    SetCharacterAnimationState(3303950, Disabled);
    SetCharacterGravity(3303950, Disabled);
    SetCharacterMaphits(3303950, true);
    SetCharacterAnimationState(3303951, Disabled);
    SetCharacterGravity(3303951, Disabled);
    SetCharacterMaphits(3303951, true);
});

// 出現寡婦_出現_故郷
$Event(13304700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineFlagChrSp &= IsOnline() && !EventFlag(X8_4) && !EventFlag(X12_4);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(X16_4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(X16_4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, true, false);
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
});

// 出現寡婦_鐘を鳴らす_故郷
$Event(13304710, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && !EventFlag(X12_4)
            && !EventFlag(X8_4)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    DisplayMessage(100002, 0);
    WaitFor(EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1);
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    RestartEvent();
});

// 出現寡婦_鐘を止める_故郷
$Event(13304720, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X12_4)
            && (EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// 出現寡婦_消滅_故郷
$Event(13304730, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4) || EventFlag(X16_4));
    hp = HPRatio(X0_4) == 0;
    flag = EventFlag(X16_4);
    WaitFor(EventFlag(X4_4) && (hp || flag));
    SetEventFlag(X8_4, ON);
    if (!flag.Passed) {
        SetEventFlag(X20_4, ON);
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// ボス撃破_邪神
$Event(13301800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3303802, Disabled);
        SetMapSoundState(3303803, Disabled);
        ChangeCharacterEnableState(3300800, Disabled);
        ForceCharacterDeath(3300800, true);
        DeactivateObject(3301800, Disabled);
        DeactivateObject(3301801, Disabled);
        DeleteMapSFX(3303800, true);
        DeleteMapSFX(3303801, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3300800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3301800, Disabled);
    DeactivateObject(3301801, Disabled);
    DeleteMapSFX(3303800, true);
    DeleteMapSFX(3303801, true);
    SetLockcamSlotNumber(33, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3300800);
    SetNetworkSyncState(Disabled);
    GotoIf(L1, HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterType(10000, TargetType.Alive));
    InitializeEvent(0, 9350, 3);
    AwardAchievement(25);
    AwardItemLot(80000200);
    SetEventFlag(3300, ON);
    SetEventFlag(9466, ON);
    EndTimeMeasurement(3300000);
    EndTimeMeasurement(3300001);
    EndTimeMeasurement(3300010);
    CreatePlaylog(40);
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
});

// ボス撃破SE再生_邪神
$Event(13301801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    flag = EventFlag(13301800);
    WaitFor(flag || (!CharacterBackreadStatus(3300800) && HPRatio(3300800) <= 0));
    EndIf(flag.Passed);
    PlaySE(3302800, SoundType.cCharacterMotion, 0);
});

// ホストがボス部屋入場_初回_邪神
$Event(13301802, Restart, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    SetCharacterMaphits(3300800, true);
    SetCharacterGravity(3300800, Disabled);
    SetCharacterInvincibility(3300800, Enabled);
    ForceAnimationPlayback(3300800, 7003, true, false, false);
    WaitFor(
        !EventFlag(13301800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 3302805));
    SetEventFlag(13304800, ON);
    ForceAnimationPlayback(3300800, 7006, false, false, false);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(3300800, 7002, false, false, false);
    WaitFixedTimeFrames(160);
    SetCharacterGravity(3300800, Enabled);
    SetCharacterInvincibility(3300800, Disabled);
    SetCharacterMaphits(3300800, false);
    EndIf(EventFlag(9302));
    InitializeEvent(0, 9350, 3);
    SetEventFlag(9302, ON);
});

// 邪神_時間差入場ゲスト用対処処理
$Event(13301803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13304800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(13304800, ON);
    SetEventFlag(13301802, ON);
});

// ホストがボス部屋入場_再戦_邪神
$Event(13304870, Default, function() {
    EndIf(EventFlag(13301800));
    if (!EventFlag(13301802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3301800, Disabled);
            DeleteMapSFX(3303800, false);
        }
        DeactivateObject(3301801, Disabled);
        DeleteMapSFX(3303801, false);
        WaitFor(
            (!EventFlag(13301800) && EventFlag(13301802))
                || (!EventFlag(13301800) && EventFlag(13304800)));
        DeactivateObject(3301800, Enabled);
        DeactivateObject(3301801, Enabled);
        SpawnMapSFX(3303800);
        SpawnMapSFX(3303801);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3300800, 3301800)
        && !EventFlag(13301800);
    flag = EventFlag(13301800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3302801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(13304800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_邪神
$Event(13304871, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    WaitFor(
        !EventFlag(13301800)
            && EventFlag(13301802)
            && EventFlag(13304800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3300800, 3301800));
    RotateCharacter(10000, 3302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3302801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(13304801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_邪神
$Event(13304872, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_邪神
$Event(13304873, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !EntityInRadiusOfEntity(10000, 3301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_邪神
$Event(13304802, Restart, function() {
    EndIf(EventFlag(13301800));
    SetCharacterAIState(3300800, Disabled);
    SetCharacterHPBarDisplay(3300800, Disabled);
    WaitFor(EventFlag(13304800));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
        SetNetworkUpdateAuthority(3300800, AuthorityLevel.Forced);
    }
L0:
    SetEventFlag(13304800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3300800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3300800);
    Goto(L4);
L3:
    SetSpEffect(3300800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3300800);
    Goto(L4);
L4:
    SetCharacterAIState(3300800, Enabled);
    DisplayBossHealthBar(Enabled, 3300800, 0, 512000);
    CreatePlaylog(78);
    StartTimeMeasurement(3300010, 94, Enabled);
});

// ボスBGM　ON_邪神
$Event(13304803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    if (!ThisEvent()) {
        SetMapSoundState(3303802, Disabled);
        SetMapSoundState(3303803, Disabled);
        flagArea &= !EventFlag(13301800) && EventFlag(13304802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13304801);
        }
        flagArea &= InArea(10000, 3302802);
        WaitFor(flagArea);
        EnableBossMapSound(3303802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3300800, 10);
    }
L0:
    chrFlagArea &= !EventFlag(13301800) && EventFlag(13304802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13304801);
    }
    chrFlagArea &= InArea(10000, 3302802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3303802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3303803, Enabled);
});

// ボスカメラ_邪神
$Event(13304804, Default, function() {
    EndIf(EventFlag(13301800));
    SetNetworkSyncState(Disabled);
    cond &= HPRatio(3300800) > 0 && EntityInRadiusOfEntity(10000, 3300800, 14);
    WaitFor(cond);
    SetLockcamSlotNumber(33, 0, 1);
    cond &= HPRatio(3300800) > 0;
    WaitFor(!EntityInRadiusOfEntity(10000, 3300800, 17));
    WaitFor(cond);
    SetLockcamSlotNumber(33, 0, 0);
    RestartEvent();
});

// ボスBGM　OFF_邪神
$Event(13304805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    WaitFor(EventFlag(13301800));
    EnableBossMapSound(3303802, Disabled);
    EnableBossMapSound(3303803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_1回目_邪神
$Event(13304807, Default, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(3300800) < 0.7);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(3300800, Interpolation.Uninterpolated);
    RequestCharacterAICommand(3300800, 100, 0);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 10));
    RequestCharacterAICommand(3300800, -1, 0);
    RequestCharacterAIReplan(3300800);
});

// ボスヒートアップ_2回目_邪神
$Event(13304808, Default, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(3300800) < 0.3 && EventFlag(13304807));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(3300800, Interpolation.Uninterpolated);
    RequestCharacterAICommand(3300800, 110, 0);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 10));
    RequestCharacterAICommand(3300800, -1, 0);
    RequestCharacterAIReplan(3300800);
});

// ボス部位強化_XX
$Event(13304820, Restart, function(X0_2, X4_4, X8_2, X10_1, X11_1) {
    EndIf(EventFlag(13301800));
    if (!ThisEvent()) {
        ChangeCharacterHitmask(3300800, X11_1, ON);
    }
L0:
    WaitFor(CharacterHasSpEffect(3300800, 5402));
    ChangeCharacterHitmask(3300800, X10_1, ON);
    ChangeCharacterHitmask(3300800, X11_1, OFF);
    CreateNPCPart(3300800, X0_2, X8_2, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(3300800, X4_4, 59, 59);
});

// ボス_部位損傷_XX
$Event(13304830, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(13301800));
    CreateNPCPart(3300800, X0_2, X8_2, X16_4, X24_4, X24_4, false, false);
    SetNPCPartSEAndSFX(3300800, X4_4, 59, 59);
    hp = NPCPartHP(3300800, X4_4) <= 0;
    hp2 = HPRatio(3300800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(3300800, X0_2, X8_2, 9999999, 1, X28_4, false, false);
    SetNPCPartSEAndSFX(3300800, X4_4, 60, 60);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(3300800, Interpolation.Interpolated);
    ForceAnimationPlayback(3300800, X20_4, false, false, false);
    SetSpEffect(3300800, X12_4, false);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(3300800, 100, 1);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 300));
    SetNPCPartHP(3300800, X4_4, -1, true);
    ClearSpEffect(3300800, X12_4);
    RequestCharacterAICommand(3300800, -1, 1);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス_部位損傷_頭
$Event(13304840, Restart, function() {
    EndIf(EventFlag(13301800));
    CreateNPCPart(3300800, 3300, NPCPartType.Part1, 300, 1.4, 1.4, false, false);
    SetNPCPartSEAndSFX(3300800, 3300, 60, 60);
    hp = NPCPartHP(3300800, 3300) <= 0;
    hp2 = HPRatio(3300800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(3300800, 3300, NPCPartType.Part1, 9999999, 1, 2.1, false, false);
    SetNPCPartSEAndSFX(3300800, 3300, 60, 60);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(3300800, Interpolation.Interpolated);
    ForceAnimationPlayback(3300800, 8000, false, false, false);
    SetSpEffect(3300800, 480, false);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(3300800, 100, 1);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 300));
    SetNPCPartHP(3300800, 3300, -1, true);
    ClearSpEffect(3300800, 480);
    RequestCharacterAICommand(3300800, -1, 1);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// 墓石OBJが倒れる
$Event(13300100, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(3301100, 1);
        EndEvent();
    }
    ForceAnimationPlayback(3301100, 0, false, false, false);
    WaitFor(InArea(10000, 3302710));
    ForceAnimationPlayback(3301100, 1, false, false, false);
});

// エレベータ初期化
$Event(13300110, Default, function() {
    flag = EventFlag(13300115);
    WaitFor(flag || !EventFlag(13300115));
    if (!flag.Passed) {
        ReproduceObjectAnimation(3301000, 6);
        SetObjactState(3301010, 3300000, Disabled);
        SetObjactState(3301011, 3300000, Enabled);
    } else {
        ReproduceObjectAnimation(3301000, 2);
        SetObjactState(3301010, 3300000, Enabled);
        SetObjactState(3301011, 3300000, Disabled);
    }
    if (!EventFlag(13300111)) {
        ReproduceObjectAnimation(3301000, 2);
        SetEventFlag(13300115, ON);
        SetObjactState(3301010, 3300000, Disabled);
        SetObjactState(3301011, 3300000, Disabled);
    }
});

// エレベータ初回起動
$Event(13300111, Default, function() {
    EndIf(ThisEventSlot());
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Disabled);
    WaitFor(InArea(10000, 3302702));
    CreatePlaylog(112);
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Enabled);
});

// エレベータ_下がる
$Event(13300112, Default, function() {
    if (!(!EventFlag(13300115) && EventFlag(13300116))) {
        WaitFor(EventFlag(13300111));
        WaitFor(
            (!EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302700))
                || (!EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302706)));
    }
L0:
    SetEventFlag(13300116, ON);
    ForceAnimationPlayback(3301011, 1, false, false, false);
    ForceAnimationPlayback(3301000, 1, false, false, false);
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(3301000, 2, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(3302706) && !AllPlayersInArea(3302701));
    ForceAnimationPlayback(3301011, 3, false, false, false);
    ForceAnimationPlayback(3301000, 3, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(13300115, ON);
    SetEventFlag(13300116, OFF);
    SetObjactState(3301010, 3300000, Enabled);
    SetObjactState(3301011, 3300000, Disabled);
    RestartEvent();
});

// エレベータ_上がる
$Event(13300113, Default, function() {
    if (!(EventFlag(13300115) && EventFlag(13300116))) {
        WaitFor(EventFlag(13300111));
        WaitFor(
            (EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302701))
                || (EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302705)));
    }
L0:
    SetEventFlag(13300116, ON);
    ForceAnimationPlayback(3301010, 1, false, false, false);
    ForceAnimationPlayback(3301000, 5, false, false, false);
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(3301000, 6, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(3302705) && !AllPlayersInArea(3302700));
    ForceAnimationPlayback(3301010, 3, false, false, false);
    ForceAnimationPlayback(3301000, 7, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(13300115, OFF);
    SetEventFlag(13300116, OFF);
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Enabled);
    RestartEvent();
});

// 演出用風再生
$Event(13300120, Default, function() {
    GotoIf(L0, ThisEvent());
    DeleteMapSFX(3303002, true);
    EndIf(ThisEventSlot());
    WaitFor(InArea(10000, 3303000));
    DeleteMapSFX(3303010, true);
    SpawnMapSFX(3303002);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(3303010);
});

// さまよう狂気_XX
$Event(13300130, Restart, function(X0_4, X4_4) {
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

// パッチが突き落す
$Event(13300200, Default, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1431));
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 3302170));
    SetEventFlag(9180, ON);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneAndWarpPlayer(33000000, CutscenePlayMode.Skippable, 3302171, 33, 0, 10000);
        } else {
            PlayCutsceneAndWarpPlayer(33001000, CutscenePlayMode.Skippable, 3302171, 33, 0, 10000);
        }
    } else {
L0:
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!PlayerGender(Gender.Female)) {
                PlayCutsceneAndWarpPlayer(33000000, CutscenePlayMode.Unskippable, 3302171, 33, 0, 10000);
            } else {
                PlayCutsceneAndWarpPlayer(33001000, CutscenePlayMode.Unskippable, 3302171, 33, 0, 10000);
            }
        } else {
L2:
            if (!PlayerGender(Gender.Female)) {
                PlayCutsceneToPlayer(33000000, CutscenePlayMode.Unskippable, 10000);
            } else {
                PlayCutsceneToPlayer(33001000, CutscenePlayMode.Unskippable, 10000);
            }
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
});

// パッチメッセージを消す
$Event(13300210, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(13300200));
    }
L0:
    SetVisibilityOfMessage(3304020, Disabled);
    DeleteMapSFX(3303020, true);
});

// NPC死亡監視
$Event(13300220, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(X0_4);
        SetCharacterBackreadState(X0_4, true);
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    SetCharacterBackreadState(2300720, true);
});

// 敵ロジックON_XX
$Event(13305150, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, X0_4, X8_4);
    chrArea = chr && (area || InArea(10000, X4_4));
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area.Passed) {
        if (!dmg.Passed) {
            WaitFixedTimeFrames(X12_4);
        }
    }
L0:
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// ほおずき_弾丸ダミーキャラ接続_XX
$Event(13305030, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 100, X0_4);
    RestartEvent();
});

// 邪眼_効果本体1
$Event(13305040, Restart, function() {
    SetNetworkSyncState(Disabled);
    if (!CharacterHasSpEffect(10000, 4691)) {
        WaitFor(CharacterHasSpEffect(10000, 4690));
        WaitFixedTimeSeconds(2);
        sp = CharacterHasSpEffect(10000, 4690);
        sp2 = !CharacterHasSpEffect(10000, 4690);
        WaitFor(sp || sp2);
        RestartIf(sp2.Passed);
    }
L0:
    SetSpEffectAndUnknown200455(10000, 4691, false);
    RestartEvent();
});

// 邪眼_効果本体2
$Event(13305041, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterHasSpEffect(10000, 4690) && CharacterHasSpEffect(10000, 4691));
    ClearSpEffect(10000, 4691);
    RestartEvent();
});

// 巡回情報切替_XX
$Event(13305200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            InArea(X0_4, X4_4)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, X8_4, X12_4)));
    }
L0:
    ChangeCharacterPatrolBehavior(X8_4, X16_4);
});

// 特殊待機解除_XX
$Event(13305210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        SetCharacterAIId(X0_4, 218390);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(10000, X0_4, X4_4))
                || HasDamageType(X0_4, -1, DamageType.Unspecified)
                || CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Alert)
                || CharacterAIState(X0_4, AIStateType.Combat));
        WaitFixedTimeSeconds(X16_4);
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    }
L0:
    SetCharacterAIId(X0_4, X20_4);
    RequestCharacterAIReplan(X0_4);
});

// 銀獣眷族が強襲
$Event(13305220, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 3302150)
                && !EventFlag(13305212));
        ForceAnimationPlayback(3300104, 7001, false, false, false);
    }
L0:
    SetCharacterAIId(3300104, 218311);
    SetEventState(13305210, 2, EventEndType.End);
});

// 銀獣眷族がPCに向かって走る
$Event(13305230, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(13305220));
    SetCharacterEventTarget(3300104, 10000);
    RequestCharacterAICommand(3300104, 50, 0);
    WaitFor(EntityInRadiusOfEntity(3300104, 10000, 5) || ElapsedSeconds(10));
    RequestCharacterAICommand(3300104, -1, 0);
});

// さまよう狂気が移動_XX
$Event(13305250, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    if (!ThisEventSlot()) {
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat));
    }
L0:
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
});

// さまよう狂気が移動_移動完了_XX
$Event(13305255, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(InArea(X0_4, X4_4));
    ForceAnimationPlayback(X0_4, 3000, false, false, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// パッチ待機
$Event(13300700, Restart, function() {
    if (ThisEvent()) {
        ForceCharacterTreasure(3300710);
        EndEvent();
    }
L0:
    SetCharacterAIState(3300710, Disabled);
    SetCharacterGravity(3300710, Disabled);
    SetCharacterHPBarDisplay(3300710, Disabled);
    SetCharacterImmortality(3300710, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(3300710, 9002, true, false, false);
    WaitFor(HasDamageType(3300710, -1, DamageType.Unspecified));
    ForceAnimationPlayback(3300710, 7006, false, false, false);
    WaitFixedTimeFrames(45);
    WarpCharacterAndCopyFloor(3300710, TargetEntityType.Area, 3302160, -1, 0);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(3300710);
});

// マップ初回入場_プレイログ
$Event(13300990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(3303500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 140, PlayLogMultiplayerType.HostOnly);
    InitializeEvent(0, 9350, 2);
});


