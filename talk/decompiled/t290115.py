# -*- coding: utf-8 -*-
def t290115_1():
    """State 0,1"""
    t290115_x1(flag1=6000, flag2=6000, actionbutton1=6100, actionbutton2=6101, actionbutton3=6103, flag3=290, flag4=5)
    Quit()

def t290115_x0():
    """State 0,1"""
    SetEventState(8500+75, 0)
    assert t290115_x7(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t290115_x1(flag1=6000, flag2=6000, actionbutton1=6100, actionbutton2=6101, actionbutton3=6103, flag3=290, flag4=5):
    """State 0"""
    while True:
        """State 1"""
        call = t290115_x3(actionbutton1=actionbutton1, actionbutton2=actionbutton2, actionbutton3=actionbutton3, flag3=flag3, flag4=flag4)
        if not GetEventStatus(flag1) or not GetEventStatus(flag2):
            pass
        elif IsMultiplayerInProgress() == 1:
            """State 2"""
            call = t290115_x2(actionbutton1=actionbutton1, flag3=flag3, flag4=flag4)
            if not IsMultiplayerInProgress():
                continue
            elif not GetEventStatus(flag1) or not GetEventStatus(flag2):
                pass
        """State 3"""
        call = t290115_x5()
        assert GetEventStatus(flag1) == 1 and GetEventStatus(flag2) == 1
    """Unused"""
    """State 4"""
    return 0

def t290115_x2(actionbutton1=6100, flag3=290, flag4=5):
    """State 0,3"""
    ForceCloseMenu()
    while True:
        """State 2"""
        if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
            pass
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton1)):
            """State 4"""
            SetTalkTime(0.33)
            assert t290115_x8(flag3=flag3, flag4=flag4)
        """State 1"""
        assert not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20)
    """Unused"""
    """State 5"""
    return 0

def t290115_x3(actionbutton1=6100, actionbutton2=6101, actionbutton3=6103, flag3=290, flag4=5):
    """State 0"""
    while True:
        """State 2"""
        DebugEvent('稼動状態_非マルチ中')
        if not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20):
            """State 1"""
            DebugEvent('非稼動状態_非マルチ中')
            if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
                pass
            elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                  and not IsPlayerDead() and not IsCharacterDisabled()):
                """State 6"""
                SetTalkTime(0.33)
                assert CheckActionButtonArea(actionbutton1)
                def WhilePaused():
                    c1_73(1)
                assert (t290115_x8(flag3=flag3, flag4=flag4) and GetEventStatus(10007810 + flag3 * 10000
                        + flag4 * 20) == 1)
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled()):
            """State 3"""
            """State 5"""
            if GetEventStatus(12100972) == 1:
                # lamp mods disabled
                assert CheckActionButtonArea(actionbutton2)
                ClearPlayerDamageInfo()
                SetTalkTime(0.33)
                call = t290115_x4(flag3=290, flag4=5)
                if call.Done():
                    pass
                elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                    assert t290115_x0()
            else:
                assert CheckActionButtonArea(actionbutton3)
                ClearPlayerDamageInfo()
                SetTalkTime(0.33)
                call = t290115_x60()
                if call.Done():
                    pass
                elif GetDistanceToPlayer() > 5 or HasPlayerBeenAttacked() == 1:
                    """State 4"""
                    assert t290115_x0()
    """Unused"""
    """State 7"""
    return 0

# hunter's dream
def t290115_x4(flag3=290, flag4=5):
    """State 0,1"""
    OpenGenericDialog(2, 10010713, 3, 4, 2)
    def WhilePaused():
        SetTalkTime(0.33)
    if GetGenericDialogButtonResult() == 1:
        """State 3"""
        DebugEvent('OK')
        """State 4"""
        call = t290115_x6(flag3=flag3, flag4=flag4, z5=0)
        if call.Get() == 1:
            pass
    elif not IsGenericDialogOpen():
        """State 2"""
        DebugEvent('CANCEL')
    """State 5"""
    return 0

def t290115_x5():
    """State 0,1"""
    ForceCloseMenu()
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t290115_x6(flag3=290, flag4=5, z5=0):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000100 + flag4 * 1, 1)
    """State 2"""
    return 0

def t290115_x7(z1=99999, z2=99999, z3=99999, z4=99999):
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
    if (CheckSpecificPersonMenuIsOpen(z1, 0) == 1 or CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z4, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t290115_x8(flag3=290, flag4=5):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000200 + flag4 * 1, 1)
    def WhilePaused():
        c1_73(1)
    """State 2"""
    return 0

# top level
def t290115_x60():
    """State 0,6"""
    if GetEventStatus(999):
        if GetEventStatus(12100858) and GetEventStatus(12100861):
            SetEventState(12100761, 1)
            SetEventState(8500+75, 1)
        else:
            pass
        while True:
            """State 1"""
            ClearTalkListData()
            """State 4"""
            if GetEventStatus(12100961) == 0 and GetEventStatus(12100761) == 0:
                AddTalkListData(20, 200087, -1)
            else:
                pass
            AddTalkListData(1, 200001, 12100880)
            if GetEventStatus(12100961) or GetEventStatus(12100761):
                AddTalkListData(2, 70002100, 12100980)
                AddTalkListData(3, 15000100, 12100879)
                AddTalkListData(4, 70000001, 12100878)
                AddTalkListData(5, 70000008, 12100877)
                AddTalkListData(6, 70000000, 12100876)
                AddTalkListData(7, 200003, 12100875)
                AddTalkListData(8, 200004, 12100874)
                if GetEventStatus(12100000 + 290 * 10 + 5 * 2) == 0 or GetEventStatus(12100000 + 290 * 10 + 5 * 2 + 1) == 0:
                    AddTalkListData(9, 200168, 12100851)
                else:
                    pass
            else:
                pass
            """State 2"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
                """State 3"""
                ForceCloseMenu()
                break
            # warp
            elif GetTalkListEntryResult() == 1:
                """State 30"""
                call = t290115_x50()
                if call.Get() == 1:
                    ForceCloseMenu()
                elif call.Done():
                    """State 34"""
                    return 0
            # hunter's dream
            elif GetTalkListEntryResult() == 2:
                call = t290115_x4(flag3=290, flag4=5)
                if call.Get() == 1:
                    ForceCloseMenu()
                elif call.Done():
                    return 0
            # level up
            elif GetTalkListEntryResult() == 3:
                """State 126"""
                if GetEventStatus(6700) == 1:
                    pass
                else:
                    """State 127"""
                    OpenGenericDialog(1, 10011000, 1, 0, 1)
                    """State 128"""
                    SetEventState(6700, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    assert not IsGenericDialogOpen()
                """State 130"""
                OpenSoul()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(23, 0)
            # workshop
            elif GetTalkListEntryResult() == 4:
                """State 135"""
                call = t290115_x70()
                if call.Get() == 1:
                    ForceCloseMenu()
                elif call.Done():
                    """State 136"""
                    return 0
            # memory alter
            elif GetTalkListEntryResult() == 5:
                """State 160"""
                if ComparePlayerInventoryNumber(3, 4104, 0, 1, 0) == 1:
                    """State 161"""
                    SetEventState(72100202, 1)
                    """State 162"""
                    DebugEvent('Body gem detachable')
                    if GetEventStatus(6705) == 1:
                        pass
                    else:
                        """State 163"""
                        OpenGenericDialog(1, 10011080, 1, 0, 1)
                        """State 164"""
                        SetEventState(6705, 1)
                        def WhilePaused():
                            SetTalkTime(0.33)
                        assert not IsGenericDialogOpen()
                    """State 165"""
                    c1_75()
                    def WhilePaused():
                        SetTalkTime(0.33)
                    assert not CheckSpecificPersonMenuIsOpen(1001, 0)
                else:
                    """State 166"""
                    OpenGenericDialog(7, 10011070, 1, 0, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    assert not IsGenericDialogOpen()
            # storage
            elif GetTalkListEntryResult() == 6:
                """State 125"""
                if GetEventStatus(6701) == 1:
                    pass
                else:
                    """State 131"""
                    OpenGenericDialog(1, 10011020, 1, 0, 1)
                    """State 132"""
                    SetEventState(6701, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    assert not IsGenericDialogOpen()
                """State 133"""
                OpenRepository()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(200, 0)
            # messengers
            elif GetTalkListEntryResult() == 7:
                """State 211"""
                call = t290115_x90()
                if call.Done():
                    pass
            # change appearance
            elif GetTalkListEntryResult() == 8:
                """State 212"""
                call = t290115_x110()
                if call.Done():
                    pass
            # offer insight
            elif GetTalkListEntryResult() == 9:
                SetEventState(8100+75, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            # rest
            elif GetTalkListEntryResult() == 20:
                SetEventState(12100761, 1)
                SetEventState(8500+75, 1)
    else:
        return 0
    SetEventState(8500+75, 0)
    return 0


# warp menu
def t290115_x50():
    """State 0"""
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        AddTalkListData(1, 200010, -1)
        if GetEventStatus(12100857) == 1 and ((GetEventStatus(12901832) == 1 and GetEventStatus(12901802) == 0) or (GetEventStatus(12901833) == 1 and GetEventStatus(12901803) == 0)):
            AddTalkListData(2, 200131, -1)
        else:
            pass
        AddTalkListData(6, 200011, -1)
        AddTalkListData(49, 200005, -1)
        AddTalkListData(50, 70002100, -1)
        """State 3"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            """State 4"""
            return 1
        elif GetTalkListEntryResult() == 1:
            call = t290115_x49()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        elif GetTalkListEntryResult() == 2:
            call = t290115_x48()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # chalice dungeons
        elif GetTalkListEntryResult() == 6:
            """State 20"""
            call = t290115_x116()
            if call.Get() == 1:
                SetEventState(1510, 1)
                SetEventState(8500+75, 0)
                ForceCloseMenu()
            elif call.Done():
                """State 21"""
                return 0
        # reawaken
        elif GetTalkListEntryResult() == 49:
            """State 15"""
            call = t290115_x40(flag3=1490, flag4=49, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                ForceCloseGenericDialog()
                pass
        # hunter's dream
        elif GetTalkListEntryResult() == 50:
            """State 17"""
            call = t290115_x4(flag3=290, flag4=5)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                ForceCloseGenericDialog()
                pass
        
def t290115_x48():
    while True:
        ClearTalkListData()
        if GetEventStatus(12901832) == 1 and GetEventStatus(12901802) == 0:
            AddTalkListData(1, 200136, -1)
        else:
            pass
        if GetEventStatus(12901833) == 1 and GetEventStatus(12901803) == 0:
            AddTalkListData(2, 200137, -1)
        else:
            pass
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1:
            SetEventState(12902855, 1)
            return 0
        elif GetTalkListEntryResult() == 2:
            SetEventState(12902875, 1)
            return 0

# awaken above ground
def t290115_x49():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 70010100, 12105030)
        AddTalkListData(2, 70010101, 12105031)
        AddTalkListData(3, 70010102, 12105032)
        AddTalkListData(4, 70010103, 12105033)
        AddTalkListData(5, 70010104, 12105034)
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        # yharnam headstone
        elif GetTalkListEntryResult() == 1:
            call = t290115_x51()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # frontier headstone
        elif GetTalkListEntryResult() == 2:
            call = t290115_x52()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # unseen headstone
        elif GetTalkListEntryResult() == 3:
            call = t290115_x53()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # nightmare headstone
        elif GetTalkListEntryResult() == 4:
            call = t290115_x54()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        # hunter's nightmare
        elif GetTalkListEntryResult() == 5:
            call = t290115_x55()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0

# warp to lamp
def t290115_x20(flag2=_, flag3=_, action1=_):
    """State 0,3"""
    DebugEvent('Flag judgment')
    if GetEventStatus(12100968) and flag2 * 10 + flag3 == 14903:
        if not GetEventStatus(70002413):
            SetEventState(72102413, 1)
            return 0
        else:
            OpenGenericDialog(1, action1, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    elif GetEventStatus(12100968) and flag2 * 10 + flag3 == 14905:
        if not GetEventStatus(70002401):
            SetEventState(72102401, 1)
            return 0
        else:
            OpenGenericDialog(1, action1, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    elif GetEventStatus(12100968) and flag2 * 10 + flag3 == 14921:
        if not GetEventStatus(70002802):
            SetEventState(72102802, 1)
            return 0
        else:
            OpenGenericDialog(1, action1, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
    elif not GetEventStatus(flag2 * 10 + 70000000 + flag3 * 1):
        """State 1"""
        SetEventState(flag2 * 10 + 72100000 + flag3 * 1, 1)
        """State 4"""
        return 0
    else:
        """State 2"""
        OpenGenericDialog(1, action1, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        """State 5"""
        return 1

# reawaken
def t290115_x40(flag3=_, flag4=_, action1=10010715):
    """State 0,5"""
    if not GetEventStatus(flag3 * 10 + 70000000 + flag4 * 1):
        """State 1"""
        OpenGenericDialog(2, 10010710, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            """State 3"""
            DebugEvent('OK')
            """State 6"""
            call = t290115_x20(flag2=flag3, flag3=flag4, action1=10010715)
            if call.Get() == 1:
                pass
        elif not IsGenericDialogOpen():
            """State 2"""
            DebugEvent('CANCEL')
    else:
        """State 4"""
        OpenGenericDialog(7, action1, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 7"""
    return 0

# yharnam headstone
def t290115_x51():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 241 * 10 + 0, 10000000 + 241 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 241 * 10 + 1, 10000000 + 241 * 10000 + 7810 + 20 * 1)
        AddTalkListData(3, 70000000 + 241 * 10 + 2, 10000000 + 241 * 10000 + 7810 + 20 * 2)
        AddTalkListData(4, 70000000 + 241 * 10 + 3, 10000000 + 241 * 10000 + 7810 + 20 * 3)
        AddTalkListData(5, 70000000 + 240 * 10 + 0, 10000000 + 240 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 240 * 10 + 1, 10000000 + 240 * 10000 + 7810 + 20 * 1)
        AddTalkListData(7, 70000000 + 242 * 10 + 0, 10000000 + 242 * 10000 + 7810 + 20 * 0)
        AddTalkListData(8, 70000000 + 242 * 10 + 2, 10000000 + 242 * 10000 + 7810 + 20 * 2)
        AddTalkListData(9, 70000000 + 242 * 10 + 1, 10000000 + 242 * 10000 + 7810 + 20 * 1)
        AddTalkListData(10, 70000000 + 230 * 10 + 0, 10000000 + 230 * 10000 + 7810 + 20 * 0)
        AddTalkListData(11, 70000000 + 230 * 10 + 1, 10000000 + 230 * 10000 + 7810 + 20 * 1)
        AddTalkListData(12, 70000000 + 230 * 10 + 2, 10000000 + 230 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t290115_x20(flag2=1490, flag3=0, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t290115_x20(flag2=1490, flag3=1, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t290115_x20(flag2=1490, flag3=2, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t290115_x20(flag2=1490, flag3=3, action1=10010722)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t290115_x20(flag2=1490, flag3=4, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t290115_x20(flag2=1490, flag3=5, action1=10010723)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t290115_x20(flag2=1490, flag3=6, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t290115_x20(flag2=1490, flag3=7, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0
        elif GetTalkListEntryResult() == 9:
            """State 23"""
            call = t290115_x20(flag2=1490, flag3=8, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 24"""
                return 0
        elif GetTalkListEntryResult() == 10:
            """State 25"""
            call = t290115_x20(flag2=1490, flag3=9, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 26"""
                return 0
        elif GetTalkListEntryResult() == 11:
            """State 27"""
            call = t290115_x20(flag2=1490, flag3=10, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 28"""
                return 0
        elif GetTalkListEntryResult() == 12:
            """State 29"""
            call = t290115_x20(flag2=1490, flag3=11, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 30"""
                return 0

# frontier headstone
def t290115_x52():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 220 * 10 + 0, 10000000 + 220 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 220 * 10 + 1, 10000000 + 220 * 10000 + 7810 + 20 * 1)
        AddTalkListData(3, 70000000 + 270 * 10 + 0, 10000000 + 270 * 10000 + 7810 + 20 * 0)
        AddTalkListData(4, 70000000 + 270 * 10 + 1, 10000000 + 270 * 10000 + 7810 + 20 * 1)
        AddTalkListData(5, 70000000 + 320 * 10 + 0, 10000000 + 320 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 320 * 10 + 2, 10000000 + 320 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t290115_x20(flag2=1490, flag3=12, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t290115_x20(flag2=1490, flag3=13, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t290115_x20(flag2=1490, flag3=14, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t290115_x20(flag2=1490, flag3=15, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t290115_x20(flag2=1490, flag3=16, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t290115_x20(flag2=1490, flag3=17, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0

# unseen headstone
def t290115_x53():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 280 * 10 + 0, 10000000 + 280 * 10000 + 7810 + 20 * 0)
        AddTalkListData(2, 70000000 + 280 * 10 + 3, 10000000 + 280 * 10000 + 7810 + 20 * 3)
        AddTalkListData(3, 70000000 + 280 * 10 + 1, 10000000 + 280 * 10000 + 7810 + 20 * 1)
        AddTalkListData(4, 70000000 + 280 * 10 + 2, 10000000 + 280 * 10000 + 7810 + 20 * 2)
        AddTalkListData(5, 70000000 + 250 * 10 + 0, 10000000 + 250 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 250 * 10 + 2, 10000000 + 250 * 10000 + 7810 + 20 * 2)
        AddTalkListData(7, 70000000 + 250 * 10 + 1, 10000000 + 250 * 10000 + 7810 + 20 * 1)
        AddTalkListData(8, 70000000 + 211 * 10 + 0, 10000000 + 211 * 10000 + 7810 + 20 * 0)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t290115_x20(flag2=1490, flag3=18, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t290115_x20(flag2=1490, flag3=19, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t290115_x20(flag2=1490, flag3=20, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t290115_x20(flag2=1490, flag3=21, action1=10010725)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t290115_x20(flag2=1490, flag3=22, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t290115_x20(flag2=1490, flag3=23, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t290115_x20(flag2=1490, flag3=24, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t290115_x20(flag2=1490, flag3=25, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0

# nightmare headstone
def t290115_x54():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(1, 70000000 + 320 * 10 + 1, 10000000 + 320 * 10000 + 7810 + 20 * 1)
        AddTalkListData(2, 70000000 + 320 * 10 + 3, 10000000 + 320 * 10000 + 7810 + 20 * 3)
        AddTalkListData(3, 70000000 + 330 * 10 + 0, 10000000 + 330 * 10000 + 7810 + 20 * 0)
        AddTalkListData(4, 70000000 + 330 * 10 + 1, 10000000 + 330 * 10000 + 7810 + 20 * 1)
        AddTalkListData(5, 70000000 + 260 * 10 + 0, 10000000 + 260 * 10000 + 7810 + 20 * 0)
        AddTalkListData(6, 70000000 + 260 * 10 + 3, 10000000 + 260 * 10000 + 7810 + 20 * 3)
        AddTalkListData(7, 70000000 + 260 * 10 + 2, 10000000 + 260 * 10000 + 7810 + 20 * 2)
        AddTalkListData(8, 70000000 + 260 * 10 + 1, 10000000 + 260 * 10000 + 7810 + 20 * 1)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 1:
            """State 7"""
            call = t290115_x20(flag2=1490, flag3=26, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            call = t290115_x20(flag2=1490, flag3=27, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 3:
            """State 11"""
            call = t290115_x20(flag2=1490, flag3=28, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 4:
            """State 13"""
            call = t290115_x20(flag2=1490, flag3=29, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 5:
            """State 15"""
            call = t290115_x20(flag2=1490, flag3=30, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 6:
            """State 17"""
            call = t290115_x20(flag2=1490, flag3=31, action1=10010715)
            if call.Done():
                """State 18"""
                return 0
            elif call.Get() == 1:
                pass
        elif GetTalkListEntryResult() == 7:
            """State 19"""
            call = t290115_x20(flag2=1490, flag3=32, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 20"""
                return 0
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            call = t290115_x20(flag2=1490, flag3=33, action1=10010715)
            if call.Done():
                """State 22"""
                return 0
            elif call.Get() == 1:
                pass

# hunter's nightmare headstone
def t290115_x55():
    """State 0"""
    if GetEventStatus(6707) == 1:
        pass
    else:
        """State 1"""
        OpenGenericDialog(1, 10011110, 1, 0, 1)
        """State 2"""
        SetEventState(6707, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 3"""
        ClearTalkListData()
        """State 4"""
        AddTalkListData(9, 70000000 + 340 * 10 + 0, 10000000 + 340 * 10000 + 7810 + 20 * 0)
        AddTalkListData(10, 70000000 + 340 * 10 + 1, 10000000 + 340 * 10000 + 7810 + 20 * 1)
        AddTalkListData(12, 70000000 + 340 * 10 + 3, 10000000 + 340 * 10000 + 7810 + 20 * 3)
        AddTalkListData(11, 70000000 + 340 * 10 + 2, 10000000 + 340 * 10000 + 7810 + 20 * 2)
        AddTalkListData(13, 70000000 + 350 * 10 + 0, 10000000 + 350 * 10000 + 7810 + 20 * 0)
        AddTalkListData(14, 70000000 + 350 * 10 + 1, 10000000 + 350 * 10000 + 7810 + 20 * 1)
        AddTalkListData(15, 70000000 + 350 * 10 + 2, 10000000 + 350 * 10000 + 7810 + 20 * 2)
        AddTalkListData(16, 70000000 + 360 * 10 + 0, 10000000 + 360 * 10000 + 7810 + 20 * 0)
        AddTalkListData(17, 70000000 + 360 * 10 + 1, 10000000 + 360 * 10000 + 7810 + 20 * 1)
        AddTalkListData(18, 70000000 + 360 * 10 + 2, 10000000 + 360 * 10000 + 7810 + 20 * 2)
        """State 5"""
        StartWarpMenuInit()
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
            """State 6"""
            return 1
        elif GetTalkListEntryResult() == 9:
            """State 7"""
            call = t290115_x20(flag2=1490, flag3=34, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 8"""
                return 0
        elif GetTalkListEntryResult() == 10:
            """State 9"""
            call = t290115_x20(flag2=1490, flag3=35, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 10"""
                return 0
        elif GetTalkListEntryResult() == 12:
            """State 11"""
            call = t290115_x20(flag2=1490, flag3=36, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 12"""
                return 0
        elif GetTalkListEntryResult() == 11:
            """State 13"""
            call = t290115_x20(flag2=1490, flag3=37, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 14"""
                return 0
        elif GetTalkListEntryResult() == 13:
            """State 15"""
            call = t290115_x20(flag2=1490, flag3=38, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 16"""
                return 0
        elif GetTalkListEntryResult() == 14:
            """State 17"""
            call = t290115_x20(flag2=1490, flag3=39, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 18"""
                return 0
        elif GetTalkListEntryResult() == 15:
            """State 19"""
            assert t290115_x20(flag2=1490, flag3=40, action1=10010715)
            """State 20"""
            return 0
        elif GetTalkListEntryResult() == 16:
            """State 21"""
            call = t290115_x20(flag2=1490, flag3=41, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 22"""
                return 0
        elif GetTalkListEntryResult() == 17:
            """State 23"""
            call = t290115_x20(flag2=1490, flag3=42, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 24"""
                return 0
        elif GetTalkListEntryResult() == 18:
            """State 25"""
            call = t290115_x20(flag2=1490, flag3=43, action1=10010715)
            if call.Get() == 1:
                pass
            elif call.Done():
                """State 26"""
                return 0

# special chalice menu
def t290115_x116(flag1=0):
    ClearTalkListData()
    SetEventState(70000230, 0)
    """State 2"""
    AddTalkListData(1, 70002900, -1)
    AddTalkListData(2, 70002901, 12907830)
    AddTalkListData(3, 70002902, 12907850)
    AddTalkListData(4, 70002903, 12907870)
    AddTalkListData(5, 70002904, 12907890)
    AddTalkListData(6, 70002905, 12907910)
    AddTalkListData(7, 70002906, 12907930)
    AddTalkListData(8, 70002907, 12907950)
    AddTalkListData(9, 70002908, 12907970)
    AddTalkListData(10, 70002909, 12907990)
    """State 36"""
    # StartWarpMenuInit()
    # ShowShopMessage(0, 0, 0)
    c1_79()
    while True:
        """State 3"""
        def WhilePaused():
            SetTalkTime(0.33)
        if GetTalkListEntryResult() == 1:
            """State 6"""
            DebugEvent('ダンジョン_1F')
            """State 39"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100300+50)
            return 0
        elif GetTalkListEntryResult() == 2:
            """State 10"""
            DebugEvent('ダンジョン_2F')
            """State 40"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100301+50)
            return 0
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            DebugEvent('ダンジョン_3F')
            """State 41"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100302+50)
            return 0
        elif GetTalkListEntryResult() == 4:
            """State 7"""
            DebugEvent('ダンジョン_4F')
            """State 42"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100303+50)
            return 0
        elif GetTalkListEntryResult() == 5:
            """State 11"""
            DebugEvent('ダンジョン_5F')
            """State 43"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100304+50)
            return 0
        elif GetTalkListEntryResult() == 6:
            """State 8"""
            DebugEvent('ダンジョン_6F')
            """State 44"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100305+50)
            return 0
        elif GetTalkListEntryResult() == 7:
            """State 9"""
            DebugEvent('ダンジョン_7F')
            """State 45"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100306+50)
            return 0
        elif GetTalkListEntryResult() == 8:
            """State 12"""
            DebugEvent('ダンジョン_8F')
            """State 46"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100307+50)
            return 0
        elif GetTalkListEntryResult() == 9:
            """State 13"""
            DebugEvent('ダンジョン_9F')
            """State 47"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100308+50)
            return 0
        elif GetTalkListEntryResult() == 10:
            """State 14"""
            DebugEvent('ダンジョン_10F')
            """State 48"""
            SetEventState(12106000, 1)
            assert t290115_x117(flag1=flag1, z1=72100309+50)
            return 0
        elif (GetTalkListEntryResult() == 50 or not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(320,
                0)):
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 1 * 100000) and GetEventStatus(9021) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 2 * 100000) and GetEventStatus(9022) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 3 * 100000) and GetEventStatus(9023) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 4 * 100000) and GetEventStatus(9024) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 5 * 100000) and GetEventStatus(9025) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
        elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + 6 * 100000) and GetEventStatus(9026) == 1:
            DebugEvent('the chalice has been removed')
            SetEventState(70000231, 0)
            SetEventState(1511, 1)
            break
    return 1

def t290115_x117(flag1=72100421, z1=_):
    """State 2"""
    SetEventState(z1, 1)
    """State 3"""
    return 0

# workshop
def t290115_x70():
    """State 0"""
    if ComparePlayerInventoryNumber(3, 4103, 0, 1, 0) == 1:
        """State 136"""
        SetEventState(72100200, 1)
    else:
        pass
    """State 137"""
    if ComparePlayerInventoryNumber(3, 4102, 0, 1, 0) == 1:
        """State 138"""
        SetEventState(72100201, 1)
    else:
        pass
    while True:
        """State 139"""
        ClearTalkListData()
        if True:
            """State 140"""
            AddTalkListData(1, 15000110, -1)
            AddTalkListData(2, 15000120, -1)
            AddTalkListData(3, 15000111, 72100200)
            AddTalkListData(4, 10011050, 72100201)
            """State 141"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
                """State 142"""
                return 1
            elif GetTalkListEntryResult() == 1:
                """State 143"""
                DebugEvent('武器強化')
                if GetEventStatus(6702) == 1:
                    pass
                else:
                    """State 144"""
                    OpenGenericDialog(1, 10011030, 1, 0, 1)
                    """State 145"""
                    SetEventState(6702, 1)
                    assert not IsGenericDialogOpen()
                """State 146"""
                OpenEquipmentChangeOfPurposeShop()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(13, 0)
            elif GetTalkListEntryResult() == 2:
                """State 147"""
                DebugEvent('装備修理')
                if GetEventStatus(6703) == 1:
                    pass
                else:
                    """State 148"""
                    OpenGenericDialog(1, 10011040, 1, 0, 1)
                    """State 149"""
                    SetEventState(6703, 1)
                    assert not IsGenericDialogOpen()
                """State 150"""
                OpenRepairShop()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(12, 0)
            elif GetTalkListEntryResult() == 3:
                """State 151"""
                DebugEvent('武器魔石着脱')
                if GetEventStatus(6704) == 1:
                    pass
                else:
                    """State 152"""
                    OpenGenericDialog(1, 10011060, 1, 0, 1)
                    """State 153"""
                    SetEventState(6704, 1)
                    assert not IsGenericDialogOpen()
                """State 154"""
                SetEventState(70000100, 1)
                """State 155"""
                c1_74()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(1000, 0)
            elif GetTalkListEntryResult() == 4:
                """State 156"""
                DebugEvent('素材を砕く')
                if GetEventStatus(6719) == 1:
                    pass
                else:
                    """State 157"""
                    OpenGenericDialog(1, 10011170, 1, 0, 1)
                    """State 158"""
                    SetEventState(6719, 1)
                    assert not IsGenericDialogOpen()
                """State 159"""
                c1_87()
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(380, 0)
        else:
            break
    return 0

# messengers
def t290115_x90():
    """State 0"""
    while True:
        """State 167"""
        ClearTalkListData()
        if True:
            """State 168"""
            AddTalkListData(1, 70000003, -1)
            AddTalkListData(2, 15000150, -1)
            AddTalkListData(3, 70000007, 6712)
            """State 169"""
            ShowShopMessage(0, 0, 0)
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
                """State 170"""
                ForceCloseMenu()
                break
            # bath messengers
            elif GetTalkListEntryResult() == 1:
                """State 171"""
                call = t290115_x91()
                if call.Done():
                    """State 220"""
                    ForceCloseMenu()
                    pass
            # insight shop
            elif GetTalkListEntryResult() == 2:
                """State 216"""
                DebugEvent('購入')
                """State 187"""
                c1_86(200000, 200099)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(370, 0)
            # stump messengers
            elif GetTalkListEntryResult() == 3:
                call = t290115_x92()
                if call.Done():
                    """State 219"""
                    ForceCloseMenu()
                    pass
        else:
            break
    return 0

# bath messengers
def t290115_x91():
    """State 0"""
    if GetEventStatus(6710) == 1:
        pass
    else:
        """State 172"""
        OpenGenericDialog(1, 10011160, 1, 0, 1)
        """State 173"""
        SetEventState(6710, 1)
        SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 174"""
        ClearTalkListData()
        """State 175"""
        AddTalkListData(1, 15000140, -1)
        AddTalkListData(2, 15000141, -1)
        AddTalkListData(3, 200036, 12100871)
        AddTalkListData(4, 200096, 12100871)
        # AddTalkListData(50, 15000005, -1)
        """State 176"""
        SetEventState(12105041, 1)
        """State 177"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if (not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not CheckSpecificPersonMenuIsOpen(300,
            0)):
            """State 186"""
            ForceCloseMenu()
            break
        elif GetTalkListEntryResult() == 1: # buy shop
            """State 178"""
            DebugEvent('購入')
            if GetEventStatus(6603) == 1: # ng +
                """State 179"""
                OpenRegularShop(140000, 149999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9802) == 1: # after rom
                """State 180"""
                OpenRegularShop(130000, 139999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9801) == 1: # after amelia
                """State 181"""
                OpenRegularShop(120000, 129999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9800) == 1: # after gascoigne
                """State 182"""
                OpenRegularShop(110000, 119999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            else:
                """State 183"""
                OpenRegularShop(100000, 109999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 2: # sell shop
            """State 184"""
            DebugEvent('売却')
            """State 185"""
            OpenSellShop(-1, -1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(64, 0)
        elif GetTalkListEntryResult() == 3: # stocked shop
            OpenRegularShop(170000, 179999)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 4: # specialty shop
            call = t290115_x93()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
    return 0

def t290115_x93():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200082, 12101400) # all trick weapons
        AddTalkListData(2, 200088, 12101401) # all standard trick weapons
        AddTalkListData(3, 200089, 12101402) # all uncanny trick weapons
        AddTalkListData(4, 200090, 12101403) # all lost trick weapons
        AddTalkListData(5, 200140, -1) # rune list
        AddTalkListData(10, 200083, 12101410) # secondary weapons
        AddTalkListData(20, 200091, 12101420) # hunter's tools
        AddTalkListData(30, 200084, 12101430) # all armors
        AddTalkListData(31, 200092, 12101431) # all head pieces
        AddTalkListData(32, 200093, 12101432) # all torse pieces
        AddTalkListData(33, 200094, 12101433) # all hand pieces
        AddTalkListData(34, 200095, 12101434) # all leg pieces
        AddTalkListData(40, 200085, 12101440) # chalices
        AddTalkListData(60, 200109, -1) # fill upgrade materials
        AddTalkListData(61, 200110, -1) # fill chalice materials
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # all trick weapons
            SetEventState(12101300, 1)
            OpenGenericDialog(1, 200097, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 2: # all standard trick weapons
            SetEventState(12101301, 1)
            OpenGenericDialog(1, 200101, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 3: # all uncanny trick weapons
            SetEventState(12101302, 1)
            OpenGenericDialog(1, 200102, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 4: # all lost trick weapons
            SetEventState(12101303, 1)
            OpenGenericDialog(1, 200103, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
        elif GetTalkListEntryResult() == 5: # rune list
            call = t290115_x89()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 10: # all secondary weapons
            SetEventState(12101310, 1)
            OpenGenericDialog(1, 200098, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 20: # all hunter's tools
            SetEventState(12101320, 1)
            OpenGenericDialog(1, 200104, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 30: # all armors
            SetEventState(12101330, 1)
            OpenGenericDialog(1, 200099, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 31: # all head pieces
            SetEventState(12101331, 1)
            OpenGenericDialog(1, 200105, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 32: # all torse pieces
            SetEventState(12101332, 1)
            OpenGenericDialog(1, 200106, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 33: # all hand pieces
            SetEventState(12101333, 1)
            OpenGenericDialog(1, 200107, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 34: # all leg pieces
            SetEventState(12101334, 1)
            OpenGenericDialog(1, 200108, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 40: # all chalices
            SetEventState(12101340, 1)
            OpenGenericDialog(1, 200100, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 60: # fill upgrade materials
            SetEventState(12101360, 0)
            OpenGenericDialog(1, 200111, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        elif GetTalkListEntryResult() == 61: # fill chalice materials
            SetEventState(12101361, 0)
            OpenGenericDialog(1, 200112, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()

def t290115_x89():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200141, -1) # all runes
        AddTalkListData(50, 200037, 12100870) # beast
        AddTalkListData(51, 200038, 12100869) # milkweed        
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # all runes
            SetEventState(12100006, 1)
            OpenGenericDialog(1, 200142, 1, 0, 1)            
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
            return 1
        elif GetTalkListEntryResult() == 50: # beast
            SetEventState(12100770, 1)
        elif GetTalkListEntryResult() == 51: # milkweed
            SetEventState(12100769, 1)

# stump messengers
def t290115_x92():
    """State 0,4"""
    ClearTalkListData()
    if GetEventStatus(12105063) == 1 and GetEventStatus(6712) == 1:
        """State 3"""
        Label('L0')
        AddTalkListData(6, 14009915, 6076)
        AddTalkListData(2, 14009911, 6072)
        AddTalkListData(7, 14009916, 6077)
        AddTalkListData(1, 14009910, 6071)
        AddTalkListData(3, 14009912, 6073)
        AddTalkListData(8, 14009917, 6078)
        AddTalkListData(4, 14009913, 6074)
        AddTalkListData(5, 14009914, 6075)
        AddTalkListData(9, 14009918, 6079)
        AddTalkListData(10, 14009919, 6080)
        AddTalkListData(11, 14009920, 6081)
        AddTalkListData(12, 14009921, 6082)
        AddTalkListData(13, 14009922, 6083)
        AddTalkListData(14, 14009923, 6084)
        AddTalkListData(15, 14009924, 6085)
        AddTalkListData(17, 14009925, -1)
        AddTalkListData(16, 15000005, -1)
        """State 1"""
        ShowShopMessage(0, 0, 0)
        SetEventState(6712, 1)
        if GetTalkListEntryResult() == 17:
            """State 5"""
            SetEventState(72100140, 1)
        elif GetTalkListEntryResult() == 1:
            """State 6"""
            SetEventState(72100141, 1)
        elif GetTalkListEntryResult() == 2:
            """State 7"""
            SetEventState(72100142, 1)
        elif GetTalkListEntryResult() == 3:
            """State 8"""
            SetEventState(72100143, 1)
        elif GetTalkListEntryResult() == 4:
            """State 9"""
            SetEventState(72100144, 1)
        elif GetTalkListEntryResult() == 5:
            """State 10"""
            SetEventState(72100145, 1)
        elif GetTalkListEntryResult() == 6:
            """State 11"""
            SetEventState(72100146, 1)
        elif GetTalkListEntryResult() == 7:
            """State 12"""
            SetEventState(72100147, 1)
        elif GetTalkListEntryResult() == 8:
            """State 13"""
            SetEventState(72100148, 1)
        elif GetTalkListEntryResult() == 9:
            """State 14"""
            SetEventState(72100149, 1)
        elif GetTalkListEntryResult() == 10:
            """State 15"""
            SetEventState(72100150, 1)
        elif GetTalkListEntryResult() == 11:
            """State 16"""
            SetEventState(72100151, 1)
        elif GetTalkListEntryResult() == 12:
            """State 17"""
            SetEventState(72100152, 1)
        elif GetTalkListEntryResult() == 13:
            """State 18"""
            SetEventState(72100153, 1)
        elif GetTalkListEntryResult() == 14:
            """State 19"""
            SetEventState(72100154, 1)
        elif GetTalkListEntryResult() == 15:
            """State 20"""
            SetEventState(72100155, 1)
        elif (GetTalkListEntryResult() == 16 or not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(300,
              0)):
            """State 2"""
            DebugEvent('教えないorキャンセル')
    elif GetEventStatus(12105063) == 1:
        """State 23"""
        OpenGenericDialog(1, 10011210, 1, 0, 1)
        """State 24"""
        SetEventState(6712, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        Goto('L0')
    else:
        """State 22"""
        OpenGenericDialog(7, 10011200, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 21"""
    DebugEvent('待機')
    assert not GetEventStatus(12105061)
    """State 25"""
    return 0

# change appearance
def t290115_x110():
    """State 0"""
    if GetEventStatus(6706) == 1:
        pass
    else:
        """State 2"""
        OpenGenericDialog(1, 10011090, 1, 0, 1)
        """State 3"""
        SetEventState(6706, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 1"""
    OpenCharaMakeMenu()
    def WhilePaused():
        SetTalkTime(0.33)
    """State 4"""
    return 0