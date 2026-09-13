# -*- coding: utf-8 -*-
def t210304_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210304_x12(z1=1000, z2=1001, z3=1002, z4=1003)
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210304_x11()
        assert not IsClientPlayer()

# doll

def t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z10, 0) == 1 or CheckSpecificPersonMenuIsOpen(z11, 0) == 1 or CheckSpecificPersonMenuIsOpen(z12,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z13, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210304_x1(text3=_, text4=_, z9=_):
    """State 0,5"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text4, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text3, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 4"""
    SetEventState(z9, 1)
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 6"""
    return 0

def t210304_x2(text1=_, text2=_):
    """State 0,4"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text2, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text1, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 5"""
    return 0

def t210304_x3():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

def t210304_x4():
    """State 0,1"""
    DebugEvent('話しかけられた')
    if not GetEventStatus(72100110):
        """State 2"""
        DebugEvent('挨拶_初回')
        """State 15"""
        assert t210304_x1(text3=1400100, text4=1400150, z9=72100110)
    elif GetEventStatus(72100111) == 1 and not GetEventStatus(12101800):
        """State 5"""
        DebugEvent('挨拶_ラスト')
        """State 19"""
        assert t210304_x2(text1=1401200, text2=1401250)
    elif GetEventStatus(1002) == 1 and not GetEventStatus(12101800):
        """State 4"""
        DebugEvent('挨拶_ラスト')
        """State 18"""
        assert t210304_x1(text3=1401100, text4=1401150, z9=72100111)
    elif GetEventStatus(13501800) == 1 and not GetEventStatus(72100116):
        """State 9"""
        DebugEvent('時計塔の狩人撃破後会話')
        """State 20"""
        assert t210304_x1(text3=1402200, text4=1402250, z9=72100116)
    elif GetEventStatus(12100502) == 1 and not GetEventStatus(72100118):
        """State 11"""
        DebugEvent('先代狩人への祈り会話')
        """State 22"""
        assert t210304_x1(text3=1402400, text4=1402450, z9=72100118)
    elif GetEventStatus(13601800) == 1 and not GetEventStatus(72100117):
        """State 12"""
        if GetEventStatus(1026) == 1 or GetEventStatus(1027) == 1:
            """State 10"""
            DebugEvent('DLCラスボス撃破後会話')
            """State 21"""
            assert t210304_x1(text3=1402300, text4=1402350, z9=72100117)
        else:
            """State 13"""
            DebugEvent('挨拶_汎用')
            """State 23"""
            assert t210304_x2(text1=1400200, text2=1400250)
    elif GetEventStatus(72100106) == 1:
        """State 6"""
        DebugEvent('挨拶_自動会話後')
        """State 8"""
        SetEventState(72100108, 1)
        """State 17"""
        assert t210304_x2(text1=1401900, text2=1401950)
        """State 7"""
        SetEventState(72100106, 0)
    elif GetEventStatus(72100110) == 1:
        """State 3"""
        DebugEvent('挨拶_汎用')
        """State 16"""
        assert t210304_x2(text1=1400200, text2=1400250)
    """State 14"""
    assert t210304_x6()
    """State 24"""
    return 0

def t210304_x5(z3=1002, z2=1001, z8=1002, z4=1003):
    """State 0,1"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 2"""
    return 0

# top level menu
def t210304_x6():
    """State 0"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 5"""
        if GetEventStatus(12100854) == 1:
            AddTalkListData(1, 200012, 12100998) # enhanced features
        else:
            AddTalkListData(1, 200012, -1) # enhanced features
        AddTalkListData(2, 15000100, -1) # channel blood echoes
        AddTalkListData(3, 15000007, -1) # talk
        AddTalkListData(4, 15000008, 12100122) # give item
        AddTalkListData(5, 200006, 12100999) # end the night
        AddTalkListData(50, 15000005, -1) # Leave
        """State 2"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not IsTalkExclusiveMenuOpen():
            break
        elif GetTalkListEntryResult() == 2: # channel blood echoes
            """State 3"""
            DebugEvent('レベルアップ')
            if GetEventStatus(6700) == 1:
                pass
            else:
                """State 14"""
                OpenGenericDialog(1, 10011000, 1, 0, 1)
                """State 15"""
                SetEventState(6700, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            """State 22"""
            assert t210304_x2(text1=1400300, text2=1400300) and CheckSpecificPersonTalkHasEnded(0) == 1
            """State 10"""
            SetEventState(72100100, 1)
            assert GetEventStatus(72100101) == 1 and GetEventStatus(72100102) == 1
            """State 7"""
            OpenSoul()
            assert not CheckSpecificPersonMenuIsOpen(23, 0)
            """State 6"""
            DebugEvent('会話終了通知_話す')
            ReportConversationEndToHavokBehavior()
            """State 11"""
            SetEventState(72100100, 0)
            assert not GetEventStatus(72100101) and not GetEventStatus(72100102)
            continue
        elif GetTalkListEntryResult() == 3: # talk
            """State 9"""
            DebugEvent('世間話')
            if GetEventStatus(9802) == 1:
                """State 19"""
                DebugEvent('異様な月')
                """State 29"""
                assert t210304_x2(text1=1400900, text2=1400950)
                continue
            elif GetEventStatus(9801) == 1:
                """State 20"""
                DebugEvent('夜')
                """State 28"""
                assert t210304_x2(text1=1400800, text2=1400850)
                continue
            elif GetEventStatus(9800) == 1:
                """State 21"""
                DebugEvent('夕')
                """State 27"""
                assert t210304_x2(text1=1400700, text2=1400750)
                continue
            else:
                """State 12"""
                DebugEvent('15時')
                if not GetEventStatus(72100113):
                    """State 18"""
                    DebugEvent('ゲールマンと会話済みでない')
                    """State 26"""
                    assert t210304_x1(text3=1400500, text4=1400550, z9=72100113)
                    continue
                else:
                    """State 17"""
                    DebugEvent('ゲールマンと会話済み')
                    """State 25"""
                    assert t210304_x2(text1=1400600, text2=1400650)
                    continue
        elif GetTalkListEntryResult() == 4: # give item
            """State 8"""
            DebugEvent('渡す')
            """State 16"""
            SetEventState(72100114, 1)
            """State 23"""
            assert t210304_x2(text1=1401000, text2=1401050)
            """State 13"""
            SetEventState(72100112, 1)
            assert not IsMenuOpen(63)
        elif GetTalkListEntryResult() == 5: # end the night
            call = t210304_x16()
            if call.Get() == 1:
                return 0
            elif call.Done():
                ForceCloseGenericDialog()
                continue
        elif GetTalkListEntryResult() == 1: # enhanced features
            call = t210304_x94()
            if call.Get() == 1:
                ForceCloseMenu()
                continue
            elif call.Done():
                pass
        """State 30"""
        Label('L0')
        return 0
    """State 4"""
    DebugEvent('立ち去る＆キャンセル')
    """State 24"""
    assert t210304_x2(text1=1400400, text2=1400450)
    Goto('L0')

def t210304_x7(z6=72100102, z7=1401700):
    """State 0,1"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 2"""
    return 0

def t210304_x8():
    """State 0,2"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 1"""
    DebugEvent('PC死亡待機')
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t210304_x9():
    """State 0,2"""
    assert t210304_x0(z10=99999, z11=99999, z12=99999, z13=99999)
    """State 1"""
    SetEventState(72100100, 0)
    """State 3"""
    return 0

def t210304_x10(z5=6003, z1=1000, z2=1001, z3=1002, z4=1003):
    """State 0,1"""
    DebugEvent('待機_会話可能判定')
    assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
            not IsPlayerDead() and not IsCharacterDisabled())
    """State 3"""
    assert not GetEventStatus(1003)
    """State 2"""
    DebugEvent('アクションボタン判定待ち')
    def ExitPause():
        SetTalkTime(0.5)
    assert CheckActionButtonArea(6003)
    """State 4"""
    return 0

def t210304_x11():
    """State 0,1"""
    DebugEvent('クライアント待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210304_x12(z1=1000, z2=1001, z3=1002, z4=1003):
    """State 0"""
    Label('L0')
    if GetEventStatus(72100105) == 1 and not GetEventStatus(72100107):
        """State 9"""
        Label('L1')
        call = t210304_x15()
        if call.Done():
            Goto('L0')
        elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
            """State 4"""
            Label('L2')
            DebugEvent('サブステート：話者が攻撃された')
            call = t210304_x5(z3=z3, z2=z2, z8=z3, z4=z4)
            def ExitPause():
                RemoveMyAggro()
            if call.Done():
                while True:
                    """State 5"""
                    Label('L3')
                    RemoveMyAggro()
                    call = t210304_x10(z5=6003, z1=z1, z2=z2, z3=z3, z4=z4)
                    if call.Done():
                        """State 6"""
                        DebugEvent('サブステート：通常会話')
                        call = t210304_x4()
                        if call.Done():
                            pass
                        elif IsPlayerDead() == 1:
                            """State 2"""
                            Label('L4')
                            DebugEvent('サブステート：PC死亡')
                            call = t210304_x8()
                            if IsAttackedBySomeone() == 1:
                                Goto('L2')
                            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                                break
                        elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                            break
                        elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
                            Goto('L2')
                    elif CheckSelfDeath() == 1 or GetEventStatus(12105100) == 1:
                        while True:
                            """State 8"""
                            Label('L5')
                            assert t210304_x14()
                            """State 7"""
                            call = t210304_x13()
                            if call.Done():
                                pass
                            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                                """State 10"""
                                DebugEvent('サブステート：会話範囲外')
                                DebugEvent('テスト')
                                assert t210304_x9()
                    elif IsAttackedBySomeone() == 1 or GetEventStatus(1003) == 1:
                        Goto('L2')
                    elif IsPlayerDead() == 1:
                        Goto('L4')
                    elif GetEventStatus(72100105) == 1 and not GetEventStatus(72100107):
                        Goto('L1')
            elif CheckSelfDeath() == 1:
                """State 3"""
                DebugEvent('サブステート：話者死亡')
                assert t210304_x7(z6=72100102, z7=1401700)
                Goto('L5')
            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 1:
                pass
            elif IsPlayerDead() == 1:
                Goto('L4')
        elif GetDistanceToPlayer() > 10:
            pass
    else:
        Goto('L3')
    """State 1"""
    DebugEvent('サブステート：会話範囲外')
    call = t210304_x9()
    if call.Done() and GetDistanceToPlayer() < 4.9:
        Goto('L3')
    elif IsAttackedBySomeone() == 1:
        Goto('L2')
    """Unused"""
    """State 11"""
    return 0

def t210304_x13():
    """State 0,1"""
    DebugEvent('調べられた')
    if GetEventStatus(12100105) == 1:
        while True:
            """State 2"""
            ClearTalkListData()
            """State 6"""
            if GetEventStatus(12100854) == 1: # gesture for menu enabled
                AddTalkListData(1, 200012, 12100998) # enhanced features
            else:
                AddTalkListData(1, 200012, -1) # enhanced features
            AddTalkListData(2, 15000100, -1)
            AddTalkListData(5, 200006, 12100999) # end the night
            AddTalkListData(50, 15000005, -1)
            """State 3"""
            ShowShopMessage(0, 0, 0)
            if GetTalkListEntryResult() == 2:
                """State 4"""
                DebugEvent('レベルアップ')
                if GetEventStatus(6700) == 1:
                    pass
                else:
                    """State 13"""
                    OpenGenericDialog(1, 10011000, 1, 0, 1)
                    """State 14"""
                    SetEventState(6700, 1)
                    assert not IsGenericDialogOpen()
                """State 10"""
                SetEventState(72100100, 1)
                assert GetEventStatus(72100101) == 1
                """State 9"""
                OpenSoul()
                assert not CheckSpecificPersonMenuIsOpen(23, 0)
                """State 11"""
                SetEventState(72100100, 0)
                """State 7"""
                DebugEvent('会話終了通知_レベルアップ')
                ReportConversationEndToHavokBehavior()
                assert not GetEventStatus(72100101)
            elif not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not IsTalkExclusiveMenuOpen():
                """State 5"""
                DebugEvent('立ち去る＆キャンセル_初回')
                """State 8"""
                DebugEvent('会話終了通知_立ち去る')
                ReportConversationEndToHavokBehavior()
                break
            elif GetTalkListEntryResult() == 5: # end the night
                call = t210304_x16()
                if call.Get() == 1:
                    return 0
                elif call.Done():
                    ForceCloseGenericDialog()
                    continue
            elif GetTalkListEntryResult() == 1: # enhanced features
                call = t210304_x94()
                if call.Get() == 1:
                    ForceCloseMenu()
                    continue
                elif call.Done():
                    pass
    else:
        """State 12"""
        OpenGenericDialog(7, 10011010, 1, 0, 1)
        assert not IsGenericDialogOpen()
        if GetEventStatus(12100854) == 0:
            call = t210304_x94()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        else:
            pass
    """State 15"""
    return 0

def t210304_x14():
    """State 0,1"""
    DebugEvent('待機_会話可能判定')
    assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
            not IsPlayerDead() and not IsCharacterDisabled())
    """State 3"""
    DebugEvent('待機_会話可能判定')
    if GetEventStatus(12105100) == 1:
        """State 2"""
        DebugEvent('アクションボタン判定待ち')
        assert CheckActionButtonArea(6004)
    else:
        """State 4"""
        DebugEvent('アクションボタン判定待ち')
        assert CheckActionButtonArea(6019)
    """State 5"""
    SetTalkDisableStateMaxDuration(0.33)
    return 0

def t210304_x15():
    """State 0"""
    assert GetDistanceToPlayer() < 5
    """State 7"""
    assert t210304_x3()
    """State 2"""
    SetEventState(72100106, 1)
    SetEventState(72100107, 1)
    """State 1"""
    if GetEventStatus(12100511) == 1:
        """State 3"""
        assert t210304_x2(text1=1402000, text2=1402000)
    elif GetEventStatus(12100510) == 1 and GetEventStatus(72100112) == 1:
        """State 4"""
        assert t210304_x2(text1=1401810, text2=1401860)
    elif GetEventStatus(12100510) == 1:
        """State 5"""
        assert t210304_x2(text1=1401800, text2=1401850)
    else:
        """State 6"""
        assert t210304_x2(text1=1402100, text2=1402100)
    """State 8"""
    return 0

# NG+
def t210304_x16():
    if GetEventStatus(12101850) == 1:
        OpenGenericDialog(2, 200008, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12100702, 1)
            return 1
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 0
    elif GetEventStatus(12101800) == 1:
        OpenGenericDialog(2, 200007, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12100700, 1)
            return 1
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 0
    return 0

# mod settings
def t210304_x94():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200031, -1) # lamp settings
        AddTalkListData(2, 200086, -1) # broken lamp
        AddTalkListData(3, 200235, -1) # prime hunter's mark
        AddTalkListData(7, 200174, -1) # balancing
        AddTalkListData(8, 200200, -1) # respec
        AddTalkListData(9, 200228, -1) # dream states
        AddTalkListData(10, 200032, -1) # misc settings
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # lamp settings
            call = t210304_x95()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 2: # broken lamp
            call = t210304_x96()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 3: # portable lamp
            call = t210304_x106()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 7: # balancing/difficulty
            call = t210304_x97()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 8: # respec
            call = t210304_x103()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 9: # dream states
            call = t210304_x98()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 10: # misc settings
            call = t210304_x99()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# lamp settings
def t210304_x95():
    while True:
        ClearTalkListData()

        # lamp deactivation
        AddTalkListData(1, 200039, 12100968)
        AddTalkListData(2, 200040, 12100868)

        # auto restock
        AddTalkListData(3, 200076, 12100962)
        AddTalkListData(4, 200077, 12100862)

        if GetEventStatus(12100862) == 1:
            AddTalkListData(35, 200172, 12100951) # disabled - enable lamp kindling
            AddTalkListData(36, 200173, 12100851) # enabled - disable lamp kindling
        else:
            pass

        # lamp menu
        AddTalkListData(13, 200029, 12100972)
        AddTalkListData(14, 200030, 12100872)

        if GetEventStatus(12100872) == 1:
            # rest
            AddTalkListData(7, 200078, 12100961)
            AddTalkListData(8, 200079, 12100861)

            # auto rest
            if GetEventStatus(12100861):
                AddTalkListData(9, 200116, 12100958)
                AddTalkListData(10, 200117, 12100858)
            else:
                pass

            # warp
            AddTalkListData(15, 200014, 12100880)
            AddTalkListData(16, 200013, 12100980)

            # level up
            AddTalkListData(17, 200016, 12100879)
            AddTalkListData(18, 200015, 12100979)

            # workshop
            AddTalkListData(19, 200018, 12100878)
            AddTalkListData(20, 200017, 12100978)

            # memory altar
            AddTalkListData(21, 200020, 12100877)
            AddTalkListData(22, 200019, 12100977)

            # storage
            AddTalkListData(23, 200022, 12100876)
            AddTalkListData(24, 200021, 12100976)

            # messengers
            AddTalkListData(25, 200024, 12100875)
            AddTalkListData(26, 200023, 12100975)

            # change appearance
            AddTalkListData(27, 200026, 12100874)
            AddTalkListData(28, 200025, 12100974)

            # rematch bosses
            AddTalkListData(29, 200044, 12100867)
            AddTalkListData(30, 200043, 12100967)

            # quick warp to boss
            AddTalkListData(31, 200133, 12100857)
            AddTalkListData(32, 200132, 12100957)

            # quick warp to boss prompt
            AddTalkListData(37, 200324, 12100893)
            AddTalkListData(38, 200323, 12100993)

            # lamp music
            AddTalkListData(33, 200320, 12100891)
            AddTalkListData(34, 200319, 12100991)
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent lamp deactivation
            SetEventState(12100968, 0)
            SetEventState(12100868, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent lamp deactivation
            SetEventState(12100968, 1)
            SetEventState(12100868, 0)
        elif GetTalkListEntryResult() == 3: # enable - auto restock
            SetEventState(12100962, 0)
            SetEventState(12100862, 1)
        elif GetTalkListEntryResult() == 4: # disable - auto restock
            SetEventState(12100962, 1)
            SetEventState(12100862, 0)
        elif GetTalkListEntryResult() == 5: # enable - drop hunt
            SetEventState(12100955, 0)
            SetEventState(12100855, 1)
        elif GetTalkListEntryResult() == 6: # disable - drop hunt
            SetEventState(12100955, 1)
            SetEventState(12100855, 0)
        elif GetTalkListEntryResult() == 7: # enable - resting
            SetEventState(12100961, 0)
            SetEventState(12100861, 1)
        elif GetTalkListEntryResult() == 8: # disable - resting
            SetEventState(12100961, 1)
            SetEventState(12100861, 0)
        elif GetTalkListEntryResult() == 9: # enable - auto resting
            SetEventState(12100958, 0)
            SetEventState(12100858, 1)
        elif GetTalkListEntryResult() == 10: # disable - auto resting
            SetEventState(12100958, 1)
            SetEventState(12100858, 0)
        elif GetTalkListEntryResult() == 13: # enable - lamp menu
            SetEventState(12100972, 0)
            SetEventState(12100872, 1)
        elif GetTalkListEntryResult() == 14: # disable - lamp menu
            SetEventState(12100972, 1)
            SetEventState(12100872, 0)
        elif GetTalkListEntryResult() == 15: # disable - warp menu
            SetEventState(12100980, 1)
            SetEventState(12100880, 0)
        elif GetTalkListEntryResult() == 16: # enable - warp menu
            SetEventState(12100980, 0)
            SetEventState(12100880, 1)
        elif GetTalkListEntryResult() == 17: # disable - level up
            SetEventState(12100979, 1)
            SetEventState(12100879, 0)
        elif GetTalkListEntryResult() == 18: # enable - level up
            SetEventState(12100979, 0)
            SetEventState(12100879, 1)
        elif GetTalkListEntryResult() == 19: # disable - workshop
            SetEventState(12100978, 1)
            SetEventState(12100878, 0)
        elif GetTalkListEntryResult() == 20: # enable - workshop
            SetEventState(12100978, 0)
            SetEventState(12100878, 1)
        elif GetTalkListEntryResult() == 21: # disable - memory altar
            SetEventState(12100977, 1)
            SetEventState(12100877, 0)
        elif GetTalkListEntryResult() == 22: # enable - memory altar
            SetEventState(12100977, 0)
            SetEventState(12100877, 1)
        elif GetTalkListEntryResult() == 23: # disable - storage
            SetEventState(12100976, 1)
            SetEventState(12100876, 0)
        elif GetTalkListEntryResult() == 24: # enable - storage
            SetEventState(12100976, 0)
            SetEventState(12100876, 1)
        elif GetTalkListEntryResult() == 25: # disable - messengers
            SetEventState(12100975, 1)
            SetEventState(12100875, 0)
        elif GetTalkListEntryResult() == 26: # enable - messengers
            SetEventState(12100975, 0)
            SetEventState(12100875, 1)
        elif GetTalkListEntryResult() == 27: # disable - change appearance
            SetEventState(12100974, 1)
            SetEventState(12100874, 0)
        elif GetTalkListEntryResult() == 28: # enable - change appearance
            SetEventState(12100974, 0)
            SetEventState(12100874, 1)
        elif GetTalkListEntryResult() == 29: # disable - boss rematches
            SetEventState(12100967, 1)
            SetEventState(12100867, 0)
        elif GetTalkListEntryResult() == 30: # enable - boss rematches
            SetEventState(12100967, 0)
            SetEventState(12100867, 1)
        elif GetTalkListEntryResult() == 31: # disable - quick warp to boss
            SetEventState(12100957, 1)
            SetEventState(12100857, 0)
        elif GetTalkListEntryResult() == 32: # enable - quick warp to boss
            SetEventState(12100957, 0)
            SetEventState(12100857, 1)
        elif GetTalkListEntryResult() == 37: # disable - quick warp to boss prompt
            SetEventState(12100993, 1)
            SetEventState(12100893, 0)
        elif GetTalkListEntryResult() == 38: # enable - quick warp to boss prompt
            SetEventState(12100993, 0)
            SetEventState(12100893, 1)
        elif GetTalkListEntryResult() == 33: # disable - lamp music
            SetEventState(12100991, 1)
            SetEventState(12100891, 0)
        elif GetTalkListEntryResult() == 34: # enable - lamp music
            SetEventState(12100991, 0)
            SetEventState(12100891, 1)
        elif GetTalkListEntryResult() == 35: # enable - lamp kindling
            SetEventState(12100951, 0)
            SetEventState(10008413, 1)
            SetEventState(12100851, 1)
        elif GetTalkListEntryResult() == 36: # disable - lamp kindling
            SetEventState(12100951, 1)
            SetEventState(12100851, 0)

# broken lamp settings
def t210304_x96():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200070, 12100965) # enable - broken lamp
        AddTalkListData(2, 200071, 12100865) # disable - broken lamp

        if GetEventStatus(12100865) == 1:
            AddTalkListData(5, 200074, 12100963) # lamp - victory respawn location
            AddTalkListData(6, 200075, 12100863) # dream - victory respawn location

            AddTalkListData(7, 200114, 12100959) # lamp - death respawn location
            AddTalkListData(8, 200115, 12100859) # dream - death respawn location
        else:
            pass

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - broken lamp
            SetEventState(12100965, 0)
            SetEventState(12100865, 1)
        elif GetTalkListEntryResult() == 2: # disable - broken lamp
            SetEventState(12100965, 1)
            SetEventState(12100865, 0)
        elif GetTalkListEntryResult() == 5: # lamp - victory respawn location
            SetEventState(12100963, 0)
            SetEventState(12100863, 1)
        elif GetTalkListEntryResult() == 6: # dream - victory respawn location
            SetEventState(12100963, 1)
            SetEventState(12100863, 0)
        elif GetTalkListEntryResult() == 7: # lamp - death respawn location
            SetEventState(12100959, 0)
            SetEventState(12100859, 1)
        elif GetTalkListEntryResult() == 8: # dream - death respawn location
            SetEventState(12100959, 1)
            SetEventState(12100859, 0)

# balance/difficulty settings
def t210304_x97():
    while True:
        ClearTalkListData()

        AddTalkListData(7, 200277, -1) # summoning

        AddTalkListData(1, 200164, 12100952) # enable - rematch scaling
        AddTalkListData(2, 200165, 12100852) # disable - rematch scaling

        AddTalkListData(20, 200145, 12102010) # increase cycle

        AddTalkListData(3, 200161, 12102033) # random spawn enabled - switch to random time
        AddTalkListData(4, 200166, 12102036) # random time enabled - switch to none
        AddTalkListData(5, 200162, 12102034) # none enabled - switch to dark fog
        AddTalkListData(6, 200163, 12102035) # dark fog enabled - switch to random spawn

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 7: # summoning
            call = t210304_x107()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 1: # enable - rematch scaling
            SetEventState(12100952, 0)
            SetEventState(12100852, 1)
        elif GetTalkListEntryResult() == 2: # disable - rematch scaling
            SetEventState(12100952, 1)
            SetEventState(12100852, 0)
        elif GetTalkListEntryResult() == 3: # switch from random spawn to random time
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 0)
            SetEventState(12102035, 0)
            SetEventState(12102036, 1)
        elif GetTalkListEntryResult() == 4: # switch from random time to no effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 1)
            SetEventState(12102035, 0)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 5: # switch from no effect to dark fog
            SetEventState(12102031, 1)
            SetEventState(12102033, 0)
            SetEventState(12102034, 0)
            SetEventState(12102035, 1)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 6: # switch from dark fog to random effect
            SetEventState(12102031, 1)
            SetEventState(12102033, 1)
            SetEventState(12102034, 0)
            SetEventState(12102035, 0)
            SetEventState(12102036, 0)
        elif GetTalkListEntryResult() == 20: # increase cycle
            call = t210304_x100()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# dream states
def t210304_x98():
    while True:
        ClearTalkListData()

        AddTalkListData(1, 200321, 12103900) # default - switch to always on
        AddTalkListData(2, 200223, 12103901) # always on - switch to always off
        AddTalkListData(3, 200224, 12103902) # always off - switch to default

        AddTalkListData(4, 200322, 12103904) # default enabled -  switch to version 1
        AddTalkListData(5, 200226, 12103905) # version 1 enabled - switch to version 2
        AddTalkListData(6, 200227, 12103906) # version 2 enabled - switch to no music
        AddTalkListData(7, 200225, 12103907) # no music enabled - switch to default

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # default - switch to fire
            SetEventState(12103899, 1)
            SetEventState(12103900, 0)
            SetEventState(12103901, 1)
            SetEventState(12103902, 0)
        elif GetTalkListEntryResult() == 2: # fire - switch to no fire
            SetEventState(12103899, 1)
            SetEventState(12103900, 0)
            SetEventState(12103901, 0)
            SetEventState(12103902, 1)
        elif GetTalkListEntryResult() == 3: # no fire - switch to default
            SetEventState(12103899, 1)
            SetEventState(12103900, 1)
            SetEventState(12103901, 0)
            SetEventState(12103902, 0)
        elif GetTalkListEntryResult() == 4: # default - switch to version 1
            SetEventState(12103903, 1)
            SetEventState(12103904, 0)
            SetEventState(12103905, 1)
            SetEventState(12103906, 0)
            SetEventState(12103907, 0)
        elif GetTalkListEntryResult() == 5: # version 1 enabled - switch to version 2
            SetEventState(12103903, 1)
            SetEventState(12103904, 0)
            SetEventState(12103905, 0)
            SetEventState(12103906, 1)
            SetEventState(12103907, 0)
        elif GetTalkListEntryResult() == 6: # version 2 enabled - switch to no music
            SetEventState(12103903, 1)
            SetEventState(12103904, 0)
            SetEventState(12103905, 0)
            SetEventState(12103906, 0)
            SetEventState(12103907, 1)
        elif GetTalkListEntryResult() == 7: # no music - switch to default
            SetEventState(12103903, 1)
            SetEventState(12103904, 1)
            SetEventState(12103905, 0)
            SetEventState(12103906, 0)
            SetEventState(12103907, 0)

# misc settings
def t210304_x99():
    while True:
        ClearTalkListData()
        # prevent auto ng+
        AddTalkListData(1, 200028, 12100973)
        AddTalkListData(2, 200027, 12100873)

        # stocked shop
        AddTalkListData(3, 200033, 12100971)
        AddTalkListData(4, 200034, 12100871)

        # shops+
        AddTalkListData(5, 200229, 12100948)
        AddTalkListData(6, 200230, 12100848)

        if GetEventStatus(12100865) == 1 or GetEventStatus(12100867) == 1:
            # auto rematch
            AddTalkListData(7, 200072, 12100964)
            AddTalkListData(8, 200073, 12100864)

            # rematch cutscenes
            AddTalkListData(9, 200067, 12100966)
            AddTalkListData(10, 200068, 12100866)
        else:
            pass

        # unlocked chalice dungeons
        AddTalkListData(11, 200080, 12100960)
        AddTalkListData(12, 200081, 12100860)

        # hidden chalice layers
        AddTalkListData(19, 200335, 14000993)
        AddTalkListData(20, 200336, 14000893)

        # random time of day
        AddTalkListData(13, 200129, 12100956)
        AddTalkListData(14, 200130, 12100856)

        # doll gesture
        AddTalkListData(15, 200138, 12100954)
        AddTalkListData(16, 200139, 12100854)

        # bridge door
        AddTalkListData(17, 200220, 12100949)
        AddTalkListData(18, 200221, 12100849)

        AddTalkListData(30, 200153, 12102202) # activate all lamps
        AddTalkListData(31, 200155, 12102212) # activate all shortcuts

        # infinite durability
        AddTalkListData(32, 200231, 12100955)
        AddTalkListData(33, 200232, 12100855)

        # fade out
        AddTalkListData(36, 200329, 14000991)
        AddTalkListData(37, 200330, 14000891)

        # ghost shop
        AddTalkListData(34, 200317, 14000990)
        AddTalkListData(35, 200318, 14000890)

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # enable - prevent auto ng+
            SetEventState(12100973, 0)
            SetEventState(12100873, 1)
        elif GetTalkListEntryResult() == 2: # disable - prevent auto ng+
            SetEventState(12100973, 1)
            SetEventState(12100873, 0)
        elif GetTalkListEntryResult() == 3: # enable - stocked shop
            SetEventState(12100971, 0)
            SetEventState(12100871, 1)
        elif GetTalkListEntryResult() == 4: # disable - stocked shop
            SetEventState(12100971, 1)
            SetEventState(12100871, 0)
        elif GetTalkListEntryResult() == 5: # enable - shops+
            SetEventState(12100948, 0)
            SetEventState(12100848, 1)
        elif GetTalkListEntryResult() == 6: # disable - shops+
            SetEventState(12100948, 1)
            SetEventState(12100848, 0)
        elif GetTalkListEntryResult() == 7: # enable - restart fight on death
            SetEventState(12100964, 0)
            SetEventState(12100864, 1)
        elif GetTalkListEntryResult() == 8: # disable - restart fight on death
            SetEventState(12100964, 1)
            SetEventState(12100864, 0)
        elif GetTalkListEntryResult() == 9: # enable - rematch cutscenes
            SetEventState(12100966, 0)
            SetEventState(12100866, 1)
        elif GetTalkListEntryResult() == 10: # disable - rematch cutscenes
            SetEventState(12100966, 1)
            SetEventState(12100866, 0)
        elif GetTalkListEntryResult() == 11: # enable - unlocked chalice dungeons
            SetEventState(12100960, 0)
            SetEventState(12100860, 1)
        elif GetTalkListEntryResult() == 12: # disable - unlocked chalice dungeons
            SetEventState(12100960, 1)
            SetEventState(12100860, 0)
        elif GetTalkListEntryResult() == 19: # enable - hidden chalice layers
            SetEventState(14000993, 0)
            SetEventState(14000893, 1)
        elif GetTalkListEntryResult() == 20: # disable - hidden chalice layers
            SetEventState(14000993, 1)
            SetEventState(14000893, 0)
        elif GetTalkListEntryResult() == 13: # enable - random time of day
            SetEventState(12100956, 0)
            SetEventState(12100856, 1)
        elif GetTalkListEntryResult() == 14: # disable - random time of day
            SetEventState(12100956, 1)
            SetEventState(12100856, 0)
        elif GetTalkListEntryResult() == 15: # enable - doll gesture
            SetEventState(12100954, 0)
            SetEventState(12100854, 1)
        elif GetTalkListEntryResult() == 16: # disable - doll gesture
            SetEventState(12100954, 1)
            SetEventState(12100854, 0)
        elif GetTalkListEntryResult() == 17: # enable - bridge door
            SetEventState(12100949, 0)
            SetEventState(12100849, 1)
        elif GetTalkListEntryResult() == 18: # disable - bridge door
            SetEventState(12100949, 1)
            SetEventState(12100849, 0)
        elif GetTalkListEntryResult() == 30: # activate all lamps
            call = t210304_x101()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 31: # activate all shortcuts
            call = t210304_x102()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 32: # enable - infinite durability
            SetEventState(12100955, 0)
            SetEventState(12100855, 1)
        elif GetTalkListEntryResult() == 33: # disable - infinite durability
            SetEventState(12100955, 1)
            SetEventState(12100855, 0)
        elif GetTalkListEntryResult() == 34: # enable - ghost shop
            SetEventState(14000990, 0)
            SetEventState(14000890, 1)
        elif GetTalkListEntryResult() == 35: # disable - ghost shop
            SetEventState(14000990, 1)
            SetEventState(14000890, 0)
        elif GetTalkListEntryResult() == 36: # enable - fade out
            SetEventState(14000991, 0)
            SetEventState(14000891, 1)
        elif GetTalkListEntryResult() == 37: # disable - fade out
            SetEventState(14000991, 1)
            SetEventState(14000891, 0)

# portable lamp settings
def t210304_x106():
    while True:
        ClearTalkListData()

        # warp
        AddTalkListData(1, 200014, 12100881)
        AddTalkListData(2, 200013, 12100981)

        # level up
        AddTalkListData(3, 200016, 12100882)
        AddTalkListData(4, 200015, 12100982)

        # workshop
        AddTalkListData(5, 200018, 12100883)
        AddTalkListData(6, 200017, 12100983)

        # memory altar
        AddTalkListData(7, 200020, 12100884)
        AddTalkListData(8, 200019, 12100984)

        # storage
        AddTalkListData(9, 200022, 12100885)
        AddTalkListData(10, 200021, 12100985)

        # messengers
        AddTalkListData(11, 200024, 12100886)
        AddTalkListData(12, 200023, 12100986)

        # change appearance
        AddTalkListData(13, 200026, 12100887)
        AddTalkListData(14, 200025, 12100987)

        # enhanced settings
        AddTalkListData(15, 200234, 12100888)
        AddTalkListData(16, 200233, 12100988)

        # double tap action
        AddTalkListData(17, 200271, 12102100) # warp menu - toggle to hunter's dream
        AddTalkListData(18, 200272, 12102101) # hunter's dream - toggle to reawaken
        AddTalkListData(19, 200273, 12102102) # reawaken - toggle to nothing
        AddTalkListData(20, 200274, 12102103) # nothing - toggle to warp menu

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # disable - warp menu
            SetEventState(12100981, 1)
            SetEventState(12100881, 0)
        elif GetTalkListEntryResult() == 2: # enable - warp menu
            SetEventState(12100981, 0)
            SetEventState(12100881, 1)
        elif GetTalkListEntryResult() == 3: # disable - level up
            SetEventState(12100982, 1)
            SetEventState(12100882, 0)
        elif GetTalkListEntryResult() == 4: # enable - level up
            SetEventState(12100982, 0)
            SetEventState(12100882, 1)
        elif GetTalkListEntryResult() == 5: # disable - workshop
            SetEventState(12100983, 1)
            SetEventState(12100883, 0)
        elif GetTalkListEntryResult() == 6: # enable - workshop
            SetEventState(12100983, 0)
            SetEventState(12100883, 1)
        elif GetTalkListEntryResult() == 7: # disable - memory altar
            SetEventState(12100984, 1)
            SetEventState(12100884, 0)
        elif GetTalkListEntryResult() == 8: # enable - memory altar
            SetEventState(12100984, 0)
            SetEventState(12100884, 1)
        elif GetTalkListEntryResult() == 9: # disable - storage
            SetEventState(12100985, 1)
            SetEventState(12100885, 0)
        elif GetTalkListEntryResult() == 10: # enable - storage
            SetEventState(12100985, 0)
            SetEventState(12100885, 1)
        elif GetTalkListEntryResult() == 11: # disable - messengers
            SetEventState(12100986, 1)
            SetEventState(12100886, 0)
        elif GetTalkListEntryResult() == 12: # enable - messengers
            SetEventState(12100986, 0)
            SetEventState(12100886, 1)
        elif GetTalkListEntryResult() == 13: # disable - change appearance
            SetEventState(12100987, 1)
            SetEventState(12100887, 0)
        elif GetTalkListEntryResult() == 14: # enable - change appearance
            SetEventState(12100987, 0)
            SetEventState(12100887, 1)
        elif GetTalkListEntryResult() == 15: # disable - enhanced menu
            SetEventState(12100988, 1)
            SetEventState(12100888, 0)
        elif GetTalkListEntryResult() == 16: # enable - enhanced menu
            SetEventState(12100988, 0)
            SetEventState(12100888, 1)
        elif GetTalkListEntryResult() == 17: # double tap - warp menu - toggle to hunter's dream
            SetEventState(12102100, 0)
            SetEventState(12102101, 1)
            SetEventState(12102102, 0)
            SetEventState(12102103, 0)
        elif GetTalkListEntryResult() == 18: # double tap - hunter's dream - toggle to reawaken
            SetEventState(12102100, 0)
            SetEventState(12102101, 0)
            SetEventState(12102102, 1)
            SetEventState(12102103, 0)
        elif GetTalkListEntryResult() == 19: # double tap - reawaken - toggle to nothing
            SetEventState(12102100, 0)
            SetEventState(12102101, 0)
            SetEventState(12102102, 0)
            SetEventState(12102103, 1)
        elif GetTalkListEntryResult() == 20: # double tap - nothing - toggle to warp menu
            SetEventState(12102100, 1)
            SetEventState(12102101, 0)
            SetEventState(12102102, 0)
            SetEventState(12102103, 0)

# summon settings
def t210304_x107():
    while True:
        ClearTalkListData()
        
        AddTalkListData(3, 200275, -1) # grand-resonance bell

        # summons signs always available
        AddTalkListData(1, 200278, 12100989) # off - toggle on
        AddTalkListData(2, 200279, 12100889) # on - toggle off

        # heal summons
        AddTalkListData(3, 200327, 14000992) # off - toggle on
        AddTalkListData(4, 200328, 14000892) # on - toggle off

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # summons signs always available - on - toggle off
            SetEventState(12100989, 0)
            SetEventState(12100889, 1)
        elif GetTalkListEntryResult() == 2: # summons signs always available - off - toggle on
            SetEventState(12100989, 1)
            SetEventState(12100889, 0)
        elif GetTalkListEntryResult() == 3: # summons signs always available - on - toggle off
            SetEventState(14000992, 0)
            SetEventState(14000892, 1)
        elif GetTalkListEntryResult() == 4: # summons signs always available - off - toggle on
            SetEventState(14000992, 1)
            SetEventState(14000892, 0)
        elif GetTalkListEntryResult() == 3: # grand-resonance bell settings
            call = t210304_x108()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# grand-resonance bell settings
def t210304_x108():
    while True:
        ClearTalkListData()

        # double tap
        AddTalkListData(1, 200276, 12102110) # gather - toggle to nothing
        AddTalkListData(2, 200274, 12102111) # nothing - toggle to gather

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # double tap - gather - toggle to nothing
            SetEventState(12102110, 0)
            SetEventState(12102111, 1)
        elif GetTalkListEntryResult() == 2: # double tap - nothing - toggle to gather
            SetEventState(12102110, 1)
            SetEventState(12102111, 0)

# increase cycle
def t210304_x100(flag=999):
    while True:
        OpenGenericDialog(2, 200146, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102001, 1)
            SetEventState(flag, 1)
            
            if GetEventStatus(12102003) == 1:
                OpenGenericDialog(1, 200147, 1, 0, 1)
            elif GetEventStatus(12102004) == 1:
                OpenGenericDialog(1, 200148, 1, 0, 1)
            elif GetEventStatus(12102005) == 1:
                OpenGenericDialog(1, 200149, 1, 0, 1)
            elif GetEventStatus(12102006) == 1:
                OpenGenericDialog(1, 200150, 1, 0, 1)
            elif GetEventStatus(12102007) == 1:
                OpenGenericDialog(1, 200151, 1, 0, 1)
            elif GetEventStatus(12102008) == 1:
                OpenGenericDialog(1, 200152, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# activate all lamps
def t210304_x101():
    while True:
        OpenGenericDialog(2, 200154, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102201, 1)
            OpenGenericDialog(1, 200158, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# unlock all shortcuts
def t210304_x102():
    while True:
        OpenGenericDialog(2, 200156, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12102211, 1)
            OpenGenericDialog(1, 200157, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1
        
# respec
def t210304_x103():
    while True:
        if GetEventStatus(12301600) == 1:
            if GetEventStatus(6744) == 1:
                AcquireGesture(4)
            else:
                pass
            if GetEventStatus(6745) == 1:
                AcquireGesture(5)
            else:
                pass
            if GetEventStatus(6746) == 1:
                AcquireGesture(6)
            else:
                pass
            if GetEventStatus(6747) == 1:
                AcquireGesture(7)
            else:
                pass
            if GetEventStatus(6749) == 1:
                AcquireGesture(9)
            else:
                pass
            if GetEventStatus(6750) == 1:
                AcquireGesture(10)
            else:
                pass
            if GetEventStatus(6751) == 1:
                AcquireGesture(11)
            else:
                pass
            if GetEventStatus(6753) == 1:
                AcquireGesture(13)
            else:
                pass
            if GetEventStatus(6754) == 1:
                AcquireGesture(14)
            else:
                pass
            if GetEventStatus(6755) == 1:
                AcquireGesture(15)
            else:
                pass
            if GetEventStatus(6756) == 1:
                AcquireGesture(16)
            else:
                pass
            if GetEventStatus(6757) == 1:
                AcquireGesture(17)
            else:
                pass
            if GetEventStatus(6758) == 1:
                AcquireGesture(18)
            else:
                pass
            if GetEventStatus(6759) == 1:
                AcquireGesture(19)
            else:
                pass
            if GetEventStatus(6760) == 1:
                AcquireGesture(20)
            else:
                pass
            if GetEventStatus(6762) == 1:
                AcquireGesture(22)
            else:
                pass
        else:
            pass
        ClearTalkListData()

        AddTalkListData(1, 200201, -1) # milquetoast
        AddTalkListData(2, 200202, -1) # lone survivor
        AddTalkListData(3, 200203, -1) # troubled childhood
        AddTalkListData(4, 200204, -1) # violent past
        AddTalkListData(5, 200205, -1) # professional
        AddTalkListData(6, 200206, -1) # military veteran
        AddTalkListData(7, 200207, -1) # noble scion
        AddTalkListData(8, 200208, -1) # cruel fate
        AddTalkListData(9, 200209, -1) # waste of skin

        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # milquetoast
            call = t210304_x104(d1=200211, e1=12308040)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 2: # lone survivor
            call = t210304_x104(d1=200212, e1=12308041)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 3: # troubled childhood
            call = t210304_x104(d1=200213, e1=12308042)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 4: # violent past
            call = t210304_x104(d1=200214, e1=12308043)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 5: # professional
            call = t210304_x104(d1=200215, e1=12308044)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 6: # military veteran
            call = t210304_x104(d1=200216, e1=12308045)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 7: # noble scion
            call = t210304_x104(d1=200217, e1=12308046)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 8: # cruel fate
            call = t210304_x104(d1=200218, e1=12308047)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
        elif GetTalkListEntryResult() == 9: # waste of skin
            call = t210304_x104(d1=200219, e1=12308048)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass

# character stats
def t210304_x104(d1=0, e1=0):
    while True:
        OpenGenericDialog(2, d1, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            call = t210304_x105(e1)
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                pass
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1

# final confirmation
def t210304_x105(e1=0):
    while True:
        OpenGenericDialog(2, 200210, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            DebugEvent('OK')
            SetEventState(12308030, 1)
            SetEventState(12301600, 1)
            SetEventState(e1, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 0
        elif not IsGenericDialogOpen():
            DebugEvent('CANCEL')
            return 1